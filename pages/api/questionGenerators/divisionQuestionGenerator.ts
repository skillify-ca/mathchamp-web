import { Question } from "../question";
import { QuestionType } from "../questionTypes";
import { getRndInteger, getRandomItemFromArray } from "../random";
import { Skill } from "../skills";
import { generateHorizontalEquationQuestion } from "./horizontalEquationQuestion";
import { generateLongDivisionQuestion } from "./longDivisionQuestion";
import { generateWordProblemQuestion } from "./wordProblemQuestion";

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
