import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useRouter } from "next/router";
import CourseNavbar from "../../components/CourseNavbar";
import PracticePreview from "../../components/PracticePreview";
import { FETCH_SKILLS_FOR_COURSE } from "../../graphql/fetchSkillsForCourse";
import { FETCH_SKILLS_FOR_STRAND } from "../../graphql/fetchSkillsForStrand";
import { useAuth } from "../../lib/authContext";

export default function StrandPage({ skillData, courseId }) {
  const router = useRouter();
  const { strand } = router.query;
  const { signIn, signOut } = useAuth();

  return (
    <div>
      <CourseNavbar />

      {skillData && (
        <div className="sm:p-8 bg-slate-200">
          <PracticePreview skills={skillData.skills} courseId={courseId} />
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_SKILLS_FOR_STRAND,
    variables: {
      strand: params.strand,
    },
  });

  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { skillData: data, courseId: "math1" } };
}
