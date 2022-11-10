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
        <h3 className="my-4 text-3xl font-bold text-murkrow dark:text-white">
          Multiplayer
        </h3>
        <div className="flex flex-wrap gap-8">
          {gameList
            .filter((game) => game.multiplayer == true)
            .map((game, i) => (
              <Link href={game.link} key={i}>
                <div className="flex flex-col items-center w-64 my-4 text-white transition-all shadow-lg cursor-pointer bg-slate-800 hover:bg-slate-700 hover:font-bold hover:text-charmander hover:scale-110 rounded-xl">
                  <img src={game.image} className="w-full h-40 rounded-t-lg" />
                  <p className="p-4">{game.title}</p>
                </div>
              </Link>
            ))}
        </div>
        <h3 className="my-4 text-3xl font-bold text-murkrow dark:text-white">
          Single Player
        </h3>
        <div className="flex flex-wrap gap-8">
          {gameList
            .filter((game) => game.multiplayer == false)
            .map((game, i) => (
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
      multiplayer: true,
    },
    {
      title: "Multiplication Connect Four",
      link: "/games/ConnectFour",
      image:
        "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      multiplayer: true,
    },
    {
      title: "Math Dash",
      link: "/games/mathDash",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      multiplayer: true,
    },
    {
      title: "Alien Pathways",
      link: "/games/AlienPathway",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      multiplayer: true,
    },
    {
      title: "War Game",
      link: "/games/LongestStreakGame",
      image:
        "https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      multiplayer: true,
    },

    {
      title: "Food Truck",
      link: "/games/foodtruck",
      image:
        "https://images.unsplash.com/photo-1605333409672-4f7db57ba3a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHRydWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      multiplayer: false,
    },
    {
      title: "Fraction Bakery",
      link: "/games/bakery",
      image:
        "https://plus.unsplash.com/premium_photo-1658506697852-99645ed7ce1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
      multiplayer: false,
    },
    {
      title: "Credit Cards",
      link: "/games/CreditvsDebitLesson",
      image:
        "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
      multiplayer: false,
    },
    {
      title: "Budget Lesson",
      link: "/games/budget",
      image:
        "https://images.unsplash.com/photo-1633158829556-6ea20ad39b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      multiplayer: false,
    },
  ];
  return {
    props: { gameList: games },
  };
}
