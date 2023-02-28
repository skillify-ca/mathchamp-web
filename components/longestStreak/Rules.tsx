import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";

export interface RulesProps {
  text: string;
  onClick: () => void;
}

export const Rules: React.FC<RulesProps> = ({ text, onClick, ...props }) => {
  return (
    <div className="h-screen">
      <div className="flex cursor-pointer justify-center item-center bg-gray-200 h-full">
        <div className="flex flex-col items-center justify-center text-black space-y-7">
          <h1 className="font-semibold text-4xl">
            <span>Welcome to the </span> 
            <span className="animate-pulse underline decoration-black-500 text-red-500">Multiplication</span>
            <span> Block Game!</span> 
          </h1>
          <ol className="flex md:flex-col flex-wrap items-center space-y-6">
            <span className="font-black text-black text-2xl">Your Quest?</span>
            <p className="text-xl font-semibold">Magically turn the longest line of squares into the Player 1 or Player
              2 color.</p>
          </ol>
          <div className="space-y-4 text-xl py-4 max-w-4xl bg-red-500 hover:drop-shadow-2xl text-white px-4 font-semibold rounded-xl cursor-pointer`">
            <ol>
              1. Embark on this math mission by clicking on two squares:
              a <span className="text-2xl">multiplication problem</span> and it's{" "}
              <span className="text-2xl">product.</span> The squares will magically
              change to a different color for each player.
            </ol>
            <ol>
              2. Choose at the end whether to level up for{" "}
              <span className="text-2xl">"harder problems"</span>
              or continue practicing at the{" "}
              <span className="text-2xl">"same level".</span> 
            </ol>
            <ol>
              3. {""}
              {""}When all squares have been magically colored in, click{" "}
              <span className="text-2xl">"Winner"</span> to see who conquered the
              board on this mission!
            </ol>
          </div>
          <p className="text-xl font-semibold"> Embark on this math mission at your own risk!</p>
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
