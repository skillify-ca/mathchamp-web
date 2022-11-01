import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";

import CourseNavbar from "../../components/CourseNavbar";
import PracticePreview from "../../components/PracticePreview";
import { FETCH_SKILLS_FOR_COURSE } from "../../graphql/fetchSkillsForCourse";

export default function MathHomePage({ courseId, skillData }) {
  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-blue-100 ">
      <CourseNavbar
        navbarLinks={[
          { name: "Practice", href: `/${courseId}` },
          { name: "Games", href: `/${courseId}/games` },
          { name: "Stats", href: `/${courseId}/stats` },
        ]}
      />
      <div className="flex flex-col p-4 space-y-8">
        {skillData && (
          <PracticePreview skills={skillData.skills} courseId={courseId} />
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_SKILLS_FOR_COURSE,
    variables: {
      courseId: "math1",
    },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { skillData: data, courseId: "math1" } };
}
