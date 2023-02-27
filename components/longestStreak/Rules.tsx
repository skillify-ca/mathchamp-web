import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";

export interface RulesProps {
  text: string;
  onClick: () => void;
}

export const Rules: React.FC<RulesProps> = ({ text, onClick, ...props }) => {
  return (
    <div className="h-screen">
      <div className="flex cursor-pointer justify-center item-center bg-slate-400 h-full">
        <div className="space-y-4 flex flex-col items-center justify-center text-black">
          <h1 className="text-center font-bold text-3xl flex justify-center">
            Welcome to the Multiplication Block Game!
          </h1>
          <ol className="flex md:flex-col flex-wrap items-center">
            <span className="font-black text-black md:text-lg">Your Quest?</span>{" "}
            <p className="text-lg">Magically turn the longest line of squares into the Player 1 or Player
              2 color.</p>{" "}
          </ol>
          <div className="space-y-4 py-4 bg-gradient-to-b max-w-3xl bg-red-500 hover:drop-shadow-2xl text-white px-3 font-bold border-b-4 rounded-lg active:border-b-2 cursor-pointer`">
            <ol className="justify-start">
              1. {""} {""}Embark on this math mission by clicking on two squares:
              a <span className="text-xl">multiplication problem</span> and its{" "}
              <span className="text-xl">product.</span> The squares will magically
              change to a different color for each player.
            </ol>
            <ol className="justify-start">
              2. {""}
              {""}Choose at the end whether to level up for{" "}
              <span className="text-xl">"harder problems"</span>
              or continue practicing at the{" "}
              <span className="text-xl">"same level".</span> 
            </ol>
            <ol className="justify-start">
              3. {""}
              {""}When all squares have been magically colored in, click
              <span className="text-xl">"Winner"</span> to see who conquered the
              board on this mission!
            </ol>
          </div>
          <p className="text-lg"> Embark on this math mission at your own risk!</p>
          <Button
            backgroundColor="red"
            label={"Play Game"}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};
export default Rules;
