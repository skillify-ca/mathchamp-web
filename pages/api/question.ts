import { AlgebraWordProblem } from "./questionGenerators/algebraQuestionGenerator";
import { HorizontalEquationQuestion } from "./questionGenerators/questionTypes/horizontalEquationQuestion";
import { LongDivisionQuestion } from "./questionGenerators/questionTypes/longDivisionQuestion";
import { TrueOrFalseQuestion } from "./questionGenerators/questionTypes/trueOrFalseQuestion";

import { QuestionType } from "./questionTypes";
import { VerticalEquationQuestion } from "./questionGenerators/questionTypes/verticalEquationQuestion";
import { VisualDotsQuestion } from "./questionGenerators/questionTypes/visualDotsQuestion";
import { WordProblemQuestion } from "./questionGenerators/questionTypes/wordProblemQuestion";
import { FinanceQuestion } from "./questionGenerators/questionTypes/money";
import { MultipleChoiceQuestion } from "./questionGenerators/questionTypes/multipleChoiceQuestion";

export type Question =
  | VerticalEquationQuestion
  | HorizontalEquationQuestion
  | MultipleChoiceQuestion
  | WordProblemQuestion
  | VisualDotsQuestion
  | TrueOrFalseQuestion
  | LongDivisionQuestion
  | {
      questionType: QuestionType.ARRAY_QUESTION;
      text: string;
      answer: string;
      colour: "red" | "purple" | "blue" | "green" | "yellow";
    }
  | AlgebraWordProblem
  | {
      questionType: QuestionType.MULTIPLICATION_EQUAL_GROUPS;
      text: string;
      answer: string;
      colour: 0 | 1 | 2 | 3;
    }
  | FinanceQuestion;
