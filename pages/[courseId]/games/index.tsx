import Link from "next/link";
import CourseNavbar from "../../../components/CourseNavbar";

export default function CourseGamesPage({ courseId, gameList }) {
  return (
    <div>
      <div>
        <CourseNavbar
          navbarLinks={[
            { name: "Practice", href: `/${courseId}` },
            { name: "Games", href: `/${courseId}/games` },
            { name: "Stats", href: `/${courseId}/stats` },
          ]}
        />
      </div>
      <div className="p-4 bg-slate-300 dark:bg-slate-700 text-murkrow">
        <h2 className="text-5xl font-bold text-murkrow dark:text-white">
          Games
        </h2>
        <div className="flex flex-wrap gap-8">
          {gameList.map((game, i) => (
            <Link href={game.link} key={i}>
              <div className="flex flex-col items-center w-64 my-4 transition-all bg-gray-100 shadow-lg cursor-pointer hover:bg-slate-200 hover:scale-110 rounded-xl">
                <img src={game.image} className="w-full h-40 rounded-t-lg" />
                <p className="p-4">{game.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const games = {
    finance: [{ title: "Credit Card Lesson", link: "finance/credit-card" }],
    math1: [
      {
        title: "Longest Streak",
        link: "/math1/games/LongestStreakGame",
        image:
          "https://images.unsplash.com/photo-1502214380024-fec72aa40e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      },
      {
        title: "Multiplication Connect Four",
        link: "/math1/games/ConnectFour",
        image:
          "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },
      {
        title: "War Game",
        link: "/math1/games/LongestStreakGame",
        image:
          "https://images.unsplash.com/photo-1502214380024-fec72aa40e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      },
      {
        title: "Alien Pathway",
        link: "/math1/games/AlienPathway",
        image:
          "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
      },
      {
        title: "Math Dash",
        link: "/math1/games/mathDash",
        image:
          "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },
      {
        title: "Fraction Bakery",
        link: "/math1/games/ConnectFour",
        image:
          "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },
      {
        title: "Credit Cards",
        link: "/math1/games/ConnectFour",
        image:
          "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },
    ],
  };
  return {
    props: { courseId: params.courseId, gameList: games[params.courseId] },
  };
}
