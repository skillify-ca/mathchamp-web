import { getRandomBinaryQuestion } from "./binaryQuestionGenerator";
import { generateCountingQuestion } from "./questionTypes/coinsQuestionsGenerator";

import { generateAlgebraQuestion } from "./algebraQuestionGenerator";
import { Skill } from "../skills";
import { Question } from "../question";

import { generateBinaryDivisionQuestion } from "./divisionQuestionGenerator";
import { generateBinaryAdditionQuestion } from "./additionQuestionGenerator";
import { generateBinarySubtractionQuestion } from "./subtractionQuestionGenerator";
import { generateFinanceQuestion } from "./financeQuestionGenerator";
import { generateBinaryMultiplicationQuestion } from "./multiplicationQuestionGenerator";

const generateQuestionForMathSkill = (skill: Skill): Question => {
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

export const generateMathQuestions = (skillId: number) => {
  let questions = [];
  // Each practice sessions only reinforces one skill as it is skill specific
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForMathSkill(skillId));
  }
  return questions;
};
