import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { LongDivisionInput } from "./LongDivisionInput";

export interface LongDivisionProp {
  text: string;
  answer: string;
  submitGuess: (guess: GuessData) => void;
  isRemainder?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const LongDivision: React.FC<LongDivisionProp> = ({
  isRemainder,
  submitGuess,
  text,
  answer,
}) => {
  const [guess, setGuess] = useState("");
  const [guess2, setGuess2] = useState("");

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };

  const parse = () => {
    const parts = text && text.split(" ");
    return {
      first: parts && parts[0],
      second: parts && parts[2],
    };
  };

  const onSubmit = () => {
    submitGuess({ guess: guess, isCorrect: guess === answer });
    (document.getElementById("guess") as HTMLInputElement).value = "";
    setGuess("");
    setGuess2("");
    submitGuess({
      guess: guess + "," + guess2,
      isCorrect: guess + "," + guess2 === answer,
    });
  };

  const num1 = parseInt(parse().first);
  let width;

  if (num1 >= 10) {
    width = 24;
  } else {
    width = 16;
  }

  let remainderComponent;
  switch (isRemainder) {
    case false:
      " ";
      break;
    case true:
      remainderComponent = (
        <div>
          R&nbsp;
          <LongDivisionInput
            id="guess2"
            guess={guess2}
            setGuess={setGuess2}
            handleKeypress={handleKeypress}
            width={width}
          />
        </div>
      );
      break;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row">
        <span className="flex flex-col-reverse text-6xl">
          {parse().second}&nbsp;
        </span>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <LongDivisionInput
              id="guess"
              guess={guess}
              setGuess={setGuess}
              handleKeypress={handleKeypress}
              width={width}
            />
            {remainderComponent}
          </div>
          <span className="text-6xl border-t-2 border-l-2 border-black">
            {parse().first}
          </span>
        </div>
      </div>
      <div className="mt-8">
        <Button
          onClick={onSubmit}
          label="Submit"
          backgroundColor="blue"
          textColor="white"
        />
      </div>
    </div>
  );
};
