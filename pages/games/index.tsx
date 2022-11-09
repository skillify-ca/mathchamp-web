import Link from "next/link";
import CourseNavbar from "../../components/CourseNavbar";
import { useAuth } from "../../lib/authContext";

export default function CourseGamesPage({ gameList }) {
  const { signIn, signOut } = useAuth();
  return (
    <div>
      <div>
        <CourseNavbar />
      </div>
      <div className="p-4 bg-slate-300 dark:bg-slate-700 text-murkrow">
        <h2 className="text-5xl font-bold text-murkrow dark:text-white">
          Games
        </h2>
        <div className="flex flex-wrap gap-8">
          {gameList.map((game, i) => (
            <Link href={game.link} key={i}>
              <div className="flex flex-col items-center w-64 my-4 text-white transition-all shadow-lg cursor-pointer bg-slate-800 hover:bg-slate-700 hover:font-bold hover:text-charmander hover:scale-110 rounded-xl">
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
  const games = [
    {
      title: "Longest Streak",
      link: "/games/LongestStreakGame",
      image:
        "https://images.unsplash.com/photo-1502214380024-fec72aa40e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    },
    {
      title: "Multiplication Connect Four",
      link: "/games/ConnectFour",
      image:
        "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "War Game",
      link: "/games/LongestStreakGame",
      image:
        "https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Math Dash",
      link: "/games/mathDash",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Fraction Bakery",
      link: "/games/ConnectFour",
      image:
        "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Credit Cards",
      link: "/games/CreditvsDebitLesson",
      image:
        "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    },
  ];
  return {
    props: { gameList: games },
  };
}
