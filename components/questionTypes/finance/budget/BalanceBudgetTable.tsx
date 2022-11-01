import React, { useState } from "react";
import { GuessData } from "../../../../pages/api/guessData";
import {
  BudgetBalanceQuestion,
  Question,
} from "../../../../pages/api/question";
import { Button } from "../../../ui/Button";

export interface BalanceBudgetProps {
  answer: string;
  question: BudgetBalanceQuestion;
  submitGuess: (guess: GuessData) => void;
}

const BalanceBudget: React.FC<BalanceBudgetProps> = ({
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

  const [guess, setGuess] = useState("");

  return (
    <div className="flex flex-col py-4 overflow-y-hidden max-h-96">
      <p className="mb-4">
        How much money does {question.personDataModel.name} need to earn to
        balance her budget? Complete the table.
      </p>

      <div className="grid text-white bg-blue-600">
        <div className="flex justify-self-center">
          <span className="">
            {question.personDataModel.name}'s {question.personDataModel.month}{" "}
            Budget
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 text-white bg-blue-300">
        <div className="border-r border-grey-500">
          <div className="flex justify-center">
            <span className="">Income</span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="">Expenses</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          {question.personDataModel.income.map((income, index) => {
            return income.cost === 0 ? (
              <div key={index}>
                {income.title}: $
                <input
                  className="overflow-hidden font-bold text-right text-black border-2 border-grey-500 w-14"
                  value={guess}
                  type="number"
                  placeholder="0"
                  onChange={(e) => setGuess(e.target.value)}
                ></input>
              </div>
            ) : (
              <div key={index}>
                {income.title}: ${income.cost}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          {question.personDataModel.expenses.map((expense, index) => {
            return (
              <div key={index}>
                {expense.title}: ${expense.cost}
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 border-t-2 border-grey-500">
        <div>
          Total: ${question.personDataModel.totalIncome} + {guess}
        </div>
        <div>Total: ${question.personDataModel.totalExpenses}</div>
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

export default BalanceBudget;
