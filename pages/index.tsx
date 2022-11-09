import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import CourseNavbar from "../components/CourseNavbar";
import PracticePreview from "../components/PracticePreview";
import { FETCH_SKILLS_FOR_COURSE } from "../graphql/fetchSkillsForCourse";
import { useAuth } from "../lib/authContext";

export default function MathHomePage({ courseId, skillData }) {
  const { signOut, user } = useAuth();

  function handleSignOutClick() {
    console.log("signout");
    signOut();
  }

  const strands = [
    {
      name: "Addition and Subtraction",
      link: "addition-subtraction",
      image: "/images/skills/add.png",
    },
    {
      name: "Multiplication and Division",
      link: "multiplication-division",
      image: "/images/skills/div.png",
    },
    {
      name: "Fractions",
      link: "fractions",
      image: "/images/skills/fractions.jpeg",
    },
    { name: "Decimals", link: "decimals", image: "/images/skills/numbers.png" },
    {
      name: "Percent, Ratio, and Proportion",
      link: "percent-ratio-proportion",
      image: "/images/skills/mixed.gif",
    },
    {
      name: "Measuring and Geometry",
      link: "measuring-geometry",
      image: "/images/skills/shapes.png",
    },
    {
      name: "Statistics, data analysis, and probability",
      link: "stats-data-probability",
      image: "/images/skills/graph.png",
    },
    {
      name: "Financial Literacy",
      link: "financial-literacy",
      image: "/images/skills/finance.png",
    },
  ];

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-blue-100 ">
      <CourseNavbar />
      <div className="grid items-stretch grid-cols-1 bg-white shadow-lg rounded-t-xl">
        <div className="p-4 space-y-8 sm:p-8">
          <div className="flex flex-col space-y-4">
            <p className="text-2xl">{`Welcome ${user.displayName}!`}</p>

            <h1 className="text-4xl font-bold capitalize text-murkrow">
              {" "}
              PRACTICE TIME
            </h1>
            <p className="text-murkrow">
              Select a strand to practice questions and level up. You can
              practice as many times as you wish. At the end, you'll be asked to
              rate your skill confidence.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 p-4">
        {strands.map((strand) => (
          <a href={`/strands/${strand.link}`}>
            <div
              className={`bg-slate-800 text-white hover:text-charmander hover:font-bold cursor-pointer hover:scale-110 transition-all transform  h-36 w-48 m-4 rounded-xl flex justify-center text-center items-center p-4 flex-col`}
            >
              <img
                className="w-16 h-16 transition-all transform rounded-full hover:rotate-12"
                src={strand.image}
              />
              <p>{strand.name}</p>
            </div>
          </a>
        ))}
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
