import { Question } from "../question";
import { QuestionType } from "../questionTypes";
import { Skill } from "../skills";
import { getRandomBinaryQuestion } from "./binaryQuestionGenerator";

export function generateBinaryMultiplicationQuestion(skill: Skill): Question {
  const DEFAULT_QUESTION_TYPES = [
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

  const multiply = (a: number, b: number) => a * b;
  // Multiplication Skills
  switch (skill) {
    case Skill.EQUAL_GROUP_10_ITEMS:
      return getRandomBinaryQuestion(6, 10, "x", multiply, skill, [
        ...DEFAULT_QUESTION_TYPES,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
      ]);
    case Skill.MULTIPLICATION_5:
      return getRandomBinaryQuestion(1, 6, "x", multiply, skill, [
        ...DEFAULT_QUESTION_TYPES,
        QuestionType.ARRAY_QUESTION,
        QuestionType.ARRAY_QUESTION,
        QuestionType.ARRAY_QUESTION,
        QuestionType.ARRAY_QUESTION,
        QuestionType.ARRAY_QUESTION,
      ]);
    case Skill.MULTIPLICATION_10:
      return getRandomBinaryQuestion(
        6,
        10,
        "x",
        multiply,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT:
      return getRandomBinaryQuestion(
        10,
        100,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT:
      return getRandomBinaryQuestion(
        100,
        1000,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT:
      return getRandomBinaryQuestion(
        10,
        100,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT:
      return getRandomBinaryQuestion(
        100,
        1000,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT:
      return getRandomBinaryQuestion(
        10,
        100,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT:
      return getRandomBinaryQuestion(
        100,
        1000,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLY_THREE_DIGIT_BY_TENTH:
      return getRandomBinaryQuestion(
        100,
        1000,
        "X",
        (a, b) => (a + b).toFixed(1),
        skill,
        MINIMUM_QUESTION_TYPES
      );
  }
  return null;
}
