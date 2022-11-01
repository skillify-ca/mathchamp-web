import React from "react";
import { GuessData } from "../pages/api/guessData";
import { Question } from "../pages/api/question";
import QuestionComponent from "./QuestionComponent";
import Card from "./ui/Card";

type QuestionSetProps = {
  questionData: Question[];
  index: number;
  submitGuess?: (guessData: GuessData) => void;
};
const QuestionSet = ({
  questionData,
  index,
  submitGuess,
}: QuestionSetProps) => {
  return (
    <div className="flex items-center justify-center w-full gap-4">
      <Card size="large">
        <div className={`transition-opacity duration-150 ease-in-out`}>
          {questionData[index] && (
            <QuestionComponent
              questionData={questionData[index]}
              submitGuess={submitGuess}
            />
          )}
        </div>
      </Card>
    </div>
  );
};

export default QuestionSet;
