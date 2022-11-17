import React, { FC, useEffect, useState } from "react";
import { getRandomItemFromArray } from "../../pages/api/random";

function numberGenerator() {
  const problem = getRandomItemFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return problem;
}

interface BlockProps {
  incrementUserProgress: () => void;
  trackUserProgress: object;
  score: () => void;
  validate: (bool) => void;
  validateOtherPlayer: (bool) => void;
  index: number;
  rollDisplay: string;
  currentRoll: number;
  blockNumber: number;
  newGame: number;
  answer: string;
}
export const BlockComponent: FC<BlockProps> = ({
  incrementUserProgress,
  score,
  validate,
  validateOtherPlayer,
  index,
  blockNumber,
  newGame,
}) => {
  const [randNumb, setRandNumb] = useState(0);
  const [randNumb2, setRandNumb2] = useState(0);
  const [blockColor, setBlockColor] = useState("");
  const [blockCorrect, setBlockCorrect] = useState(false);
  const [guess, setGuess] = useState("");

  const [disableInput, setDisableInput] = useState(true);
  const problem = randNumb.toString() + " x " + randNumb2.toString();
  const product = (randNumb * randNumb2).toString();
  const [disableInputAfterGuess, SetDisableInputAfterGuess] = useState(false);

  // This function is triggered when the user answers a question
  const onSubmit = (guess: string) => {
    // If they guess correctly, then colour green, disable the input and validate the other players dice
    if (guess === product) {
      score();
      setBlockCorrect(true);
      setBlockColor("bg-green-500 border-2");
      setDisableInput(false);
      SetDisableInputAfterGuess(true);
      validateOtherPlayer(false);
      incrementUserProgress();
    } else {
      // If they guess incorrectly, then colour red, disable the input and validate the other players dice
      setBlockCorrect(false);
      setBlockColor("bg-red-600 border-2");
      validate(true);
      setDisableInput(false);
      SetDisableInputAfterGuess(true);
      validateOtherPlayer(false);
    }

    setGuess("");
  };

  // This useEffect colours the selected problem yellow
  // Running into issues with this useEffect overwriting above submit guess
  useEffect(() => {
    if (blockNumber === index && !blockCorrect) {
      setBlockColor("bg-yellow-600 border-2");
      validate(true);
      setDisableInput(false);
      SetDisableInputAfterGuess(false);
    }
  }, [index]);

  // This useEffect disables the input to all problems except the selected problem
  useEffect(() => {
    setDisableInput(
      (blockNumber != index && !blockCorrect) || disableInputAfterGuess
    );
  });

  // This useEffect generates two random numbers to create a problem
  useEffect(() => {
    let randNumb1 = numberGenerator();
    let randNumb2 = numberGenerator();
    setRandNumb(randNumb1);
    setRandNumb2(randNumb2);
  }, [newGame]);

  // This useEffect checks and updates the user score
  useEffect(() => {
    score();
  });
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  ``;

  return (
    <div className={blockColor}>
      <input
        onBlur={() => onSubmit(guess)}
        id="input"
        type="number"
        value={guess}
        className="text-xl text-normal text-sky-50 place-content-center bg-inherit w-20 placeholder:text-inherit text-center"
        onChange={(e) => setGuess(e.target.value)}
        placeholder={problem}
        disabled={disableInput}
      ></input>
    </div>
  );
};

export default BlockComponent;
