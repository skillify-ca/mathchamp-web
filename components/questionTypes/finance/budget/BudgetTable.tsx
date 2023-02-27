import React from "react";
import { GuessData } from "../../../../pages/api/guessData";
import { BudgetTableQuestion } from "../../../../pages/api/questionGenerators/questionTypes/money/budgetQuestion";
import { Button } from "../../../ui/Button";

export interface BudgetItemProps {
  answer: string;
  question: BudgetTableQuestion;
  submitGuess: (guess: GuessData) => void;
}

const BudgetTable: React.FC<BudgetItemProps> = ({
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

  return (
    <div className="flex flex-col py-4 overflow-y-hidden max-h-96">
      <h3 className="font-bold">Question:</h3>
      <p>
        Cassie has ${question.text}. Does she have enough to buy a roll of
        electrical tape and a light bulb?
      </p>
      <p className="mb-4 italic">Do not round.</p>

      <div className="mb-4 bg-green-300">
        {question.budgetCostModel.map((item, index) => (
          <div key={index} className="grid grid-cols-2 odd:bg-green-200">
            <div className="pl-4">{item.title}</div>
            <div className="pr-4 text-right">${item.cost}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          backgroundColor="blue"
          textColor="white"
          label="Yes"
          onClick={() => onSubmit("Yes")}
        />
        <Button
          backgroundColor="blue"
          textColor="white"
          label="No"
          onClick={() => onSubmit("No")}
        />
      </div>
    </div>
  );
};
export default BudgetTable;
