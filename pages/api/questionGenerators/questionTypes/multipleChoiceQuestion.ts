import { QuestionType } from "../../questionTypes";
import { ItemContainerObj, Noun } from "../../WordProblemModelObjects";
import { randomize } from "../binaryQuestionGenerator";
import { shuffle } from "lodash";

export type MCOption = {
  id: string;
  text: string;
};

export type MCModel = {
  title?: string;
  options: Array<MCOption>;
};

// TODO is this even used anymore?
type MutipleChoiceSentenceQuestion = {
  questionType: QuestionType.MULTIPLE_CHOICE_SENTENCE;
  multipleChoice: MCModel;
  answer: string;
  text: string;
};

// TODO Is this even used?
type MultipleChoiceWordQuestion = {
  questionType: QuestionType.MULTIPLE_CHOICE_WORD;
  answer: string;
  multipleChoice: MCModel;
  text: string;
};

type MultipleChoiceDefaultQuestion = {
  questionType: QuestionType.MULTIPLE_CHOICE;
  answer: string;
  multipleChoice: MCModel;
  text: string;
};

export type MultipleChoiceQuestion =
  | MultipleChoiceDefaultQuestion
  | MultipleChoiceWordQuestion
  | MutipleChoiceSentenceQuestion;

export function generateMultipleChoiceQuestion(
  firstNumber: number,
  secondNumber: number,
  operator: string,
  answerFunction: (x: number, y: number) => number
): MultipleChoiceDefaultQuestion {
  if (firstNumber < secondNumber) {
    let temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }

  let realAns = answerFunction(firstNumber, secondNumber);
  let wrongArr = [-2, -1, 1, 2];
  let wrongIndexA = randomize(0, wrongArr.length);
  let wrongA = wrongArr[wrongIndexA] + realAns;
  wrongArr.splice(wrongIndexA, 1);
  let wrongIndexB = randomize(0, wrongArr.length);
  let wrongB = wrongArr[wrongIndexB] + realAns;

  const option1: MCOption = { text: wrongA.toString(), id: "a" };
  const option2: MCOption = { text: wrongB.toString(), id: "b" };
  const option3: MCOption = { text: realAns.toString(), id: "c" };

  const optionArr = [option1, option2, option3];

  return {
    text: `${firstNumber} ${operator} ${secondNumber}`,
    answer: answerFunction(
      Math.max(firstNumber, secondNumber),
      Math.min(firstNumber, secondNumber)
    ).toString(),
    questionType: QuestionType.MULTIPLE_CHOICE,
    multipleChoice: { options: shuffle(optionArr) },
  };
}

export type WordProblemModel = {
  name: string;
  operator: string;
  itemContainer: ItemContainerObj;
  nounType: string;
  item1: Noun;
  item2?: Noun;
};
