import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Question } from "../../../pages/api/question";
import { WordProblemQuestion } from "../../../pages/api/questionGenerators/wordProblemQuestion";
import {
  ItemContainerObj,
  Noun,
} from "../../../pages/api/WordProblemModelObjects";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

export interface WordProblemSubProp {
  submitGuess: (guess: GuessData) => void;
  question: WordProblemQuestion;
  isReadOnly?: boolean;
}

/**
 * The Subtraction Word problem follows a specific template and is as follows:
 * (name) has a (itemContainer) of (randomNumber1) (nounType).
 * (name) takes out (randomNumber2) (noun.title). How many (nounTypes) are left in the (itemContainer)?
 */
export const WordProblemSub: React.FC<WordProblemSubProp> = ({
  submitGuess,
  question,
  isReadOnly = false,
  ...props
}) => {
  const name = question.wordProblem.name;
  const itemContainer: ItemContainerObj = question.wordProblem.itemContainer;
  const noun1: Noun = question.wordProblem.item1;

  const [guess, setGuess] = useState("");
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    setGuess("");
    submitGuess({
      guess: guess,
      isCorrect: guess === question.answer.toString(),
    });
  };
  const parse = () => {
    const parts = question.text.split(" ");
    return {
      first: parts[0],
      second: parts[2],
    };
  };
  const title = (noun, number) => {
    if (number == "1") {
      return noun.singleTitle;
    }
    return noun.pluralTitle;
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap text-xl">
        <p className="align-left">
          {name} has a {itemContainer.singleTitle} of {noun1.type}. Inside,
          there are
          <span> </span>
          <span className="font-extrabold text-black">
            {parse().first} {noun1.type}.
          </span>{" "}
          {name} takes out
          <span className={noun1.colour}>{" " + parse().second + " "}</span>
          {title(noun1, parse().second)}. How many {noun1.type} are left in the{" "}
          {itemContainer.singleTitle}?
        </p>
      </div>
      {!isReadOnly && (
        <div className="flex flex-wrap text-2xl">
          <Input
            value={guess}
            setValue={setGuess}
            handleKeypress={handleKeypress}
          />
        </div>
      )}
      <div className="flex flex-wrap mt-2">
        <img src={noun1.image} className="w-12 h-12 sm:w-16 sm:h-16" />
        <img src={noun1.image} className="w-12 h-12 sm:w-16 sm:h-16" />
        <img src={noun1.image} className="w-12 h-12 sm:w-16 sm:h-16" />
        <img src={noun1.image} className="w-12 h-12 sm:w-16 sm:h-16" />
        <img src={noun1.image} className="w-12 h-12 sm:w-16 sm:h-16" />
      </div>
      {!isReadOnly && (
        <Button
          onClick={onSubmit}
          label="Submit"
          backgroundColor="blue"
          textColor="white"
        />
      )}
    </div>
  );
};
