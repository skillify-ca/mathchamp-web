import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { WordProblemQuestion } from "../../../pages/api/questionGenerators/questionTypes/wordProblemQuestion";
import {
  ItemContainerObj,
  Noun,
} from "../../../pages/api/WordProblemModelObjects";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

export interface WordProblemAddProp {
  autofocus?: boolean;
  question: WordProblemQuestion;
  submitGuess?: (guess: GuessData) => void;
  isReadOnly?: boolean;
}

/* Addition Word problems are made with a specific template. The template is as follows: (name) has an (itemContainer) of (itemType). 
Inside there are [randomNumber1] (item1.title) and [randomNumber2] (item2.title). How many (itemType) are in the (itemContainer)? */
export const WordProblemAdd: React.FC<WordProblemAddProp> = ({
  autofocus = true,
  question,
  submitGuess,
  isReadOnly = false,
  ...props
}) => {
  const name = question.wordProblem && question.wordProblem.name;
  const itemContainer: ItemContainerObj = question.wordProblem.itemContainer;
  const noun1: Noun = question.wordProblem.item1;
  const noun2: Noun = question.wordProblem.item2;
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
          <span className={noun1.colour}>{" " + parse().first + " "}</span>
          {title(noun1, parse().first)} and
          <span className={noun2.colour}>{" " + parse().second + " "}</span>
          {title(noun2, parse().second)}. How many {noun1.type} are in the{" "}
          {itemContainer.singleTitle}?
        </p>
      </div>
      {!isReadOnly && (
        <div className="flex flex-wrap justify-center w-full text-2xl">
          <Input
            autoFocus={autofocus}
            value={guess}
            setValue={setGuess}
            handleKeypress={handleKeypress}
          />
        </div>
      )}
      <div className="flex flex-wrap justify-center mt-2">
        <img src={noun1.image} className="w-12 h-12 sm:w-16 sm:h-16" />
        <img src={noun2.image} className="w-12 h-12 sm:w-16 sm:h-16" />
        <img src={noun1.image} className="w-12 h-12 sm:w-16 sm:h-16" />
        <img src={noun2.image} className="w-12 h-12 sm:w-16 sm:h-16" />
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
