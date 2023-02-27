import React, { useState, useEffect } from "react";
import { GuessData } from "../../../../pages/api/guessData";
import { FinanceTipQuestion } from "../../../../pages/api/questionGenerators/questionTypes/money/tipQuestion";
import { Button } from "../../../ui/Button";

export interface TipQuestionProps {
  answer: string;
  question: FinanceTipQuestion;
  submitGuess: (guess: GuessData) => void;
}

const TipQuestion: React.FC<TipQuestionProps> = ({
  question,
  submitGuess,
  answer,
}) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess: guess,
      isCorrect: guess.toString() == answer.toString(),
    });
  };
  /** Reference user input and store it in a state, then clear input values by next question */
  const [guess, setGuess] = useState("");
  useEffect(() => {
    (document.getElementById("input") as HTMLInputElement).value = "";
  }, []);

  return (
    <div className="flex flex-col gap-4 py-4 overflow-y-hidden max-h-96">
      <p>
        Estimate the amount of tip by rounding the bill to the nearest dollar{" "}
        <span className="italic">after</span> calculating.
      </p>
      {""}
      <p className="pl-10">
        <span className="font-bold">{question.text}%</span> tip on a bill of{" "}
        <span className="font-bold">${question.displayNum}</span>
      </p>
      {""}
      <div>
        <p className="mb-4">The amount of the tip is approximately</p>
        <p className="mb-4">
          $
          <input
            id="input"
            type="number"
            value={guess}
            className="w-20 font-bold text-right border-2 border-gray-300"
            onChange={(e) => setGuess(e.target.value)}
          ></input>
          .
        </p>
      </div>
      <Button
        backgroundColor="blue"
        textColor="white"
        label="Submit"
        onClick={() => onSubmit(guess)}
      />
    </div>
  );
};

export default TipQuestion;
