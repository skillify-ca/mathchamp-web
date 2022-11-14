import React, { FC, useEffect, useState } from "react";
import { type } from "os";
import input from "postcss/lib/input";
import { current } from "@reduxjs/toolkit";
import { getRandomItemFromArray } from "../../pages/api/random";

function numberGenerator() {
  const problem = getRandomItemFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return problem;
}

interface BlockProps {
  trackUserProgress: object;
  score: () => void;
  validate: (bool) => void;
  index: number;
  rollDisplay: string;
  currentRoll: number;
  blockNumber: number;
  newGame: number;
  answer: string;
}
export const BlockComponent: FC<BlockProps> = ({
  trackUserProgress,
  score,
  validate,
  index,
  currentRoll,
  blockNumber,
  newGame,
  answer,
}) => {
  const [randNumb, setRandNumb] = useState(0);
  const [randNumb2, setRandNumb2] = useState(0);
  const [blockColor, setBlockColor] = useState("");
  const [blockAnswered, setBlockAnswered] = useState(false);
  const [blockCorrect, setBlockCorrect] = useState(false);
  const [dieRoll, setDieRoll] = useState("");
  const [guess, setGuess] = useState("");
  const [blockDisable, setBlockDisable] = useState(true);
  const [multproblem, setMultProblem] = useState("");
  const [indexNumber, setIndexNumber] = useState(0);
  const [disableInput, setDisableInput] = useState(true);
  const problem = randNumb.toString() + " x " + randNumb2.toString();
  const product = (randNumb * randNumb2).toString();

  const onSubmit = (guess: string) => {
    if (guess === product) {
      score();
      setBlockAnswered(true);
      setBlockCorrect(true);
      setBlockColor("bg-green-500 border-2");
      validate(false);
    } else {
      setBlockAnswered(true);
      setBlockCorrect(false);
      setBlockColor("bg-red-500 border-2");
      validate(true);
    }

    setGuess("");
  };

  useEffect(() => {
    setDisableInput(blockNumber != index);
  });
  useEffect(() => {
    if (blockNumber === index && !blockCorrect) {
      setBlockColor("bg-yellow-500 border-2");
      validate(true);
    }
  });
  // randNumb1 and randNumb2 are written this way to prevent rolling a number
  // which corresponds to a row that is already complete
  useEffect(() => {
    let randNumb1 = numberGenerator();
    if (trackUserProgress[randNumb1] == 6) {
      let randNumb1 = numberGenerator();
    }
    let randNumb2 = numberGenerator();
    if (trackUserProgress[randNumb2] == 6) {
      let randNumb2 = numberGenerator();
    }
    setRandNumb(randNumb1);
    setRandNumb2(randNumb2);
  }, [newGame]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  ``;
  // const handleKeyPress = (e) => {
  //   if (e.charCode === 13) {
  //     onSubmit(guess);
  //   }
  // };
  return (
    <div className={blockColor}>
      <input
        // onKeyPress={(e) => handleKeyPress(e)}
        onBlur={(e) => onSubmit(guess)}
        id="input"
        type="number"
        value={guess}
        className="text-sm text-white place-content-center bg-inherit w-12 placeholder:text-inherit text-center"
        onChange={(e) => setGuess(e.target.value)}
        placeholder={problem}
        disabled={disableInput}
      ></input>
    </div>
  );
};

export default BlockComponent;
