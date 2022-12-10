import { Question } from "../question";
import { QuestionType } from "../questionTypes";
import { Skill } from "../skills";
import { getRandomBinaryQuestion } from "./binaryQuestionGenerator";

export function generateBinaryAdditionQuestion(skill: Skill): Question {
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

  switch (skill) {
    case Skill.ADDITION_SINGLE:
      const singleAdditionQuestionTypes = [
        ...DEFAULT_QUESTION_TYPES,
        QuestionType.VISUAL_TYPE_PROBLEM,
        QuestionType.VISUAL_TYPE_PROBLEM,
        QuestionType.VISUAL_TYPE_PROBLEM,
        QuestionType.VISUAL_TYPE_PROBLEM,
        QuestionType.VISUAL_TYPE_PROBLEM,
      ];
      return getRandomBinaryQuestion(
        1,
        11,
        "+",
        (a, b) => a + b,
        skill,
        singleAdditionQuestionTypes
      );
    case Skill.ADDITION_DOUBLE:
      return getRandomBinaryQuestion(
        10,
        101,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.ADDITION_TRIPLE:
      return getRandomBinaryQuestion(
        100,
        1001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.ADDITION_TENTHS:
      return getRandomBinaryQuestion(
        0.1,
        0.9,
        "+",
        (a, b) => (a + b).toFixed(1),
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.ADDITION_4_DIGIT:
      return getRandomBinaryQuestion(
        1000,
        10001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.ADDITION_5_DIGIT:
      return getRandomBinaryQuestion(
        10000,
        100001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.ADDITION_6_DIGIT:
      return getRandomBinaryQuestion(
        100000,
        1000001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.ADDITION_HUNDREDTHS:
      return getRandomBinaryQuestion(
        0.01,
        0.99,
        "+",
        (a, b) => (a + b).toFixed(2),
        skill,
        MINIMUM_QUESTION_TYPES
      );
  }
  return null;
}
