import { getRedirectResult } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../lib/authContext";
import { auth } from "../../lib/firebase";

export default function SignInPage() {
  const { signIn, user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function checkAuth() {
      const result = await getRedirectResult(auth);
      if (result) {
        router.push("/games");
      }
    }
    checkAuth();
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <div className="z-10 bg-white shadow-lg">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fh5p.org%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fsmall-logo%2Fpublic%2Flogos%2Fbasic-arithmetic-quiz-icon-color.png%3Fitok%3D3Z3UHvqk&f=1&nofb=1&ipt=115557ff48ad09a4ab59de291c43e26b3e5196bbda1b08130facc463236579d2&ipo=images"
          className="w-40 p-4"
        />
      </div>
      <div className="z-0 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full h-0 px-16 pt-16 -mt-16 bg-left bg-cover sm:pt-64 sm:h-screen bg-signInBackground">
          <h2 className="w-full p-8 text-2xl font-bold text-white bg-slate-800 rounded-xl">
            Math Champ is an open source math textbook that specializes in
            fractions.
          </h2>
        </div>
        <div className="flex flex-col gap-8 p-8 border-l-2 sm:p-24">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-charmander">
              Get started with Math Champ
            </h2>
            <p className="">Let's start learning</p>
          </div>
          <button
            onClick={() => signIn()}
            className="flex items-center justify-between w-64 p-4 bg-white border border-black shadow-lg rounded-2xl hover:bg-gray-100"
          >
            Sign in with Google
            <img className="w-8" src="/images/welcome/googleLogo.png" />
          </button>
        </div>
      </div>
    </div>
  );
}
