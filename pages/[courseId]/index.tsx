import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";

import CourseNavbar from "../../components/CourseNavbar";
import PracticePreview from "../../components/PracticePreview";
import { FETCH_SKILLS_FOR_COURSE } from "../../graphql/fetchSkillsForCourse";
import { useAuth } from "../../lib/authContext";

export default function MathHomePage({ courseId, skillData }) {
  const { signOut, signIn } = useAuth();

  function handleSignOutClick() {
    console.log("signout");
    signOut();
  }

  const strands = [
    { name: "Addition and Subtraction", link: "addition-subtraction" },
    { name: "Multiplication and Division", link: "multiplication-division" },
    { name: "Fractions", link: "fractions" },
    { name: "Decimals", link: "decimals" },
    {
      name: "Percent, Ratio, and Proportion",
      link: "percent-ratio-proportion",
    },
    { name: "Measuring and Geometry", link: "measuring-geometry" },
    {
      name: "Statistics, data analysis, and probability",
      link: "stats-data-probability",
    },
    { name: "Financial Literacy", link: "financial-literacy" },
  ];

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-blue-100 ">
      <CourseNavbar />
      <div className="flex flex-col p-4 space-y-8">
        {strands.map((strand) => (
          <a href={`/strands/${strand.link}`}>
            <div
              className={`bg-gradient-to-b from-orange-400 cursor-pointer hover:scale-110 hover:bg-orange-300 transition-all transform to-orange-500 h-36 w-48 m-4 rounded-xl flex justify-center text-center items-center p-4`}
            >
              <p>{strand.name}</p>
            </div>
          </a>
        ))}
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

MathHomePage.auth = true;
