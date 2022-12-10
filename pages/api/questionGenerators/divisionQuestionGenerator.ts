import { Question } from "../question";
import { QuestionType } from "../questionTypes";
import { getRndInteger, getRandomItemFromArray } from "../random";
import { Skill } from "../skills";
import { generateHorizontalEquationQuestion } from "./questionTypes/horizontalEquationQuestion";
import { generateLongDivisionQuestion } from "./questionTypes/longDivisionQuestion";
import { generateWordProblemQuestion } from "./questionTypes/wordProblemQuestion";

export function generateBinaryDivisionQuestion(skill: Skill): Question {
  //All division questions min and maxs are in respect to the dividend
  // Division skills
  switch (skill) {
    case Skill.EQUAL_SHARING_8_ITEMS:
      return getRandomDivisionQuestion(1, 5, skill);
    case Skill.DIVIDE_12_EQUALLY:
      return getRandomDivisionQuestion(1, 6, skill);
    case Skill.DIVIDE_100:
      return getRandomDivisionQuestion(1, 11, skill);
    case Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(10, 100, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_TENTH:
      return getRandomDivisionQuestion(100, 1000, skill);
  }

  return null;
}

export function getRandomDivisionQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const product = a * b;
  const types = [
    QuestionType.LONG_DIVISION_PROBLEM,
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
  ];
  const type = getRandomItemFromArray(types);

  switch (type) {
    case QuestionType.LONG_DIVISION_PROBLEM:
      return generateLongDivisionQuestion(a, b);
    case QuestionType.HORIZONTAL_EQUATION:
      return generateHorizontalEquationQuestion(
        product,
        b,
        "÷",
        (x, y) => Math.floor(x / y),
        skill
      );
    case QuestionType.BINARY_WORD_PROBLEM:
      return generateWordProblemQuestion(product, b, "÷", (x, y) =>
        Math.floor(x / y)
      );
  }
}
