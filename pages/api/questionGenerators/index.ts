import { getRandomBinaryQuestion } from "./binaryQuestionGenerator";
import { generateCountingQuestion } from "./questionTypes/coinsQuestionsGenerator";

import { generateAlgebraQuestion } from "./algebraQuestionGenerator";
import { Skill } from "../skills";
import { Question } from "../question";
import { QuestionType } from "../questionTypes";

import { getRandomDivisionQuestion } from "./divisionQuestionGenerator";
import { generateBinaryAdditionQuestion } from "./additionQuestionGenerator";
import { generateBinarySubtractionQuestion } from "./subtractionQuestionGenerator";
import { generateFinanceQuestion } from "./financeQuestionGenerator";

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

function generateBinaryMultiplicationQuestion(skill: Skill): Question {
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

function generateBinaryDivisionQuestion(skill: Skill): Question {
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

export const generateQuestionForMath1Skill = (skill: Skill): Question => {
  // Addition skills
  const additionQuestion = generateBinaryAdditionQuestion(skill);
  if (additionQuestion) {
    return additionQuestion;
  }

  // Subtraction Skills
  const subtractionQuestion = generateBinarySubtractionQuestion(skill);
  if (subtractionQuestion) {
    return subtractionQuestion;
  }

  // Multiplication Skills
  const multiplicationQuestion = generateBinaryMultiplicationQuestion(skill);
  if (multiplicationQuestion) {
    return multiplicationQuestion;
  }

  // Division Skills
  const divisionQuestion = generateBinaryDivisionQuestion(skill);
  if (divisionQuestion) {
    return divisionQuestion;
  }

  if (skill === Skill.FINANCE_COUNTING_COINS_BILLS)
    return generateCountingQuestion();

  if (skill === Skill.ALGEBRA_SOLVE_VARIABLE) {
    return generateAlgebraQuestion();
  }

  // Finance Skills
  const financeQuestion = generateFinanceQuestion(skill);
  if (financeQuestion) {
    return financeQuestion;
  }

  return null;
};

export const generateMath1Questions = (skillId: number) => {
  let questions = [];
  // Each practice sessions only reinforces one skill as it is skill specific
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForMath1Skill(skillId));
  }
  return questions;
};
