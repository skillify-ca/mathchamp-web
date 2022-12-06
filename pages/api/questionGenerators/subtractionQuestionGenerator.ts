import { Question } from "../question";
import { QuestionType } from "../questionTypes";
import { Skill } from "../skills";
import { getRandomBinaryQuestion } from "./binaryQuestionGenerator";

export const DEFAULT_QUESTION_TYPES = [
  QuestionType.HORIZONTAL_EQUATION,
  QuestionType.BINARY_WORD_PROBLEM,
  QuestionType.VERTICAL_EQUATION,
  QuestionType.TRUE_OR_FALSE_PROBLEM,
  QuestionType.MULTIPLE_CHOICE,
];

const MINIMUM_QUESTION_TYPES = [
  QuestionType.HORIZONTAL_EQUATION,
  QuestionType.VERTICAL_EQUATION,
];

export function generateBinarySubtractionQuestion(skill: Skill): Question {
  switch (skill) {
    case Skill.SUBTRACTION_SINGLE:
      return getRandomBinaryQuestion(
        2,
        11,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_DOUBLE:
      return getRandomBinaryQuestion(
        10,
        101,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_TRIPLE:
      return getRandomBinaryQuestion(
        100,
        1001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_4_DIGIT:
      return getRandomBinaryQuestion(
        1000,
        10001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_TENTHS:
      return getRandomBinaryQuestion(
        0.1,
        0.9,
        "-",
        (a, b) => (a + b).toFixed(1),
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_5_DIGIT:
      return getRandomBinaryQuestion(
        10000,
        100001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_6_DIGIT:
      return getRandomBinaryQuestion(
        100000,
        1000001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_HUNDREDTHS:
      return getRandomBinaryQuestion(
        0.01,
        0.99,
        "-",
        (a, b) => (a + b).toFixed(2),
        skill,
        MINIMUM_QUESTION_TYPES
      );
  }
  return null;
}
