import {
  generateWordProblemQuestion,
  getRandomItemFromMap,
  nameSelector,
} from "./wordProblemQuestion";
import { generateHorizontalEquationQuestion } from "./horizontalEquationQuestion";
import { generateLongDivisionQuestion } from "./longDivisionQuestion";
import { getRandomBinaryQuestion, randomize } from "./binaryQuestionGenerator";
import { generateCountingQuestion } from "./coinsQuestionsGenerator";

import { generateAlgebraQuestion } from "./algebraQuestionGenerator";
import { Skill } from "../skills";
import { Question } from "../question";
import { QuestionType } from "../questionTypes";
import {
  getRndInteger,
  getRandomItemFromArray,
  getRndHundredthsDecimal,
} from "../random";
import { fruitsMap, animalsMap } from "../WordProblemModelObjects";
import { personDataTable } from "../../../components/questionTypes/finance/budget/BalanceBudgetData";
import { getBalanceBudgetQuestion } from "./money/balanceBudgetQuestion";
import { getBudgetQuestion } from "./money/budgetQuestion";
import { getTipQuestion } from "./money/tipQuestion";
import { getRandomDivisionQuestion } from "./divisionQuestionGenerator";

const DEFAULT_QUESTION_TYPES = [
  QuestionType.HORIZONTAL_EQUATION,
  QuestionType.BINARY_WORD_PROBLEM,
  QuestionType.VERTICAL_EQUATION,
  QuestionType.TRUE_OR_FALSE_PROBLEM,
  QuestionType.MULTIPLE_CHOICE,
];

const DEFAULT_QUESTIONT_TYPES = [
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

export const generateQuestionForMath1Skill = (skill: Skill): Question => {
  console.log(skill);

  // Addition skills
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
  }

  // Subtraction Skills
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
  }

  if (skill === Skill.FINANCE_COUNTING_COINS_BILLS)
    return generateCountingQuestion();

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
  }

  //All division questions min and maxs are in respect to the dividend
  // Division skills
  switch (skill) {
    case Skill.EQUAL_SHARING_8_ITEMS:
      return getRandomDivisionQuestion(1, 5, skill);
    case Skill.DIVIDE_12_EQUALLY:
      return getRandomDivisionQuestion(1, 6, skill);
    case Skill.DIVIDE_100:
      return getRandomDivisionQuestion(1, 11, skill);
  }

  if (skill === Skill.ALGEBRA_SOLVE_VARIABLE) {
    return generateAlgebraQuestion();
  }

  // Finance Skills
  switch (skill) {
    case Skill.FINANCE_BUDGET:
      const types = [
        QuestionType.FINANCE_BUDGET_TABLE_PROBLEM,
        QuestionType.FINANCE_TIP_PROBLEM,
        QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM,
      ];
      /** Cycle through QuestionTypes */
      let questionIndex = getRndInteger(0, types.length);
      let type = types[questionIndex];

      if (type === QuestionType.FINANCE_TIP_PROBLEM) {
        let tip = getRndInteger(10, 20);
        let bill = getRndHundredthsDecimal(50, 100);
        return getTipQuestion(tip, bill);
      } else if (type === QuestionType.FINANCE_BUDGET_TABLE_PROBLEM) {
        let tape = getRndHundredthsDecimal(2, 3);
        let bulb = getRndHundredthsDecimal(2, 3);
        return getBudgetQuestion(tape, bulb);
      } else if (type === QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM) {
        let personIndex = getRndInteger(0, personDataTable.length);
        let person = personDataTable[personIndex];
        return getBalanceBudgetQuestion(person);
      }
    case Skill.FINANCE_UNIT_PRICES:
      const noun1 = getRandomItemFromMap(fruitsMap);
      let randomTotal = randomize(11, 100);
      let randomNumberOfObjects = randomize(1, 10);
      let name = nameSelector();
      let singularFruit = noun1.singleTitle;
      let pluralFruit = noun1.pluralTitle;
      let image = noun1.image;
      return {
        questionType: QuestionType.FINANCE_UNIT_PRICE_PROBLEM,
        answer: Math.floor(randomTotal / randomNumberOfObjects).toString(),
        text: "",
        unitPriceModel: {
          total: randomTotal,
          numberOfObjects: randomNumberOfObjects,
          name: name,
          singularFruit: singularFruit,
          pluralFruit: pluralFruit,
          image: image,
        },
      };
    case Skill.FINANCE_SALES_TAX:
      const noun2 = getRandomItemFromMap(animalsMap);
      let randomNumber = randomize(2, 20);
      let taxRate = Math.floor(Math.random() * 19) + 1;
      let price = randomize(1, 20) + randomize(1, 100) * 0.01;
      let personName = nameSelector();
      let multipleAnimals = noun2.pluralTitle;
      let image1 = noun2.image;
      return {
        questionType: QuestionType.FINANCE_SALES_TAX_PROBLEM,
        answer: (
          Math.round(100 * (randomNumber * price * (taxRate / 100))) / 100
        ).toString(),
        text: "",
        salesTaxModel: {
          numberOfToys: randomNumber,
          taxRate: taxRate,
          price: price.toFixed(2),
          personName: personName,
          multipleAnimals: multipleAnimals,
          image1: image1,
        },
      };
    case Skill.FINANCE_COMMISSIONS:
      let _personName = nameSelector();
      let _commission = Math.floor(Math.random() * 19) + 1;
      let _price = Math.floor(Math.random() * 10000 + 1);
      let _numberOfSales = Math.floor(Math.random() * 10 + 1);

      return {
        questionType: QuestionType.FINANCE_COMMISSION_PROBLEM,
        commisionModel: {
          personName: _personName,
          commission: _commission,
          price: _price,
          numberOfSales: _numberOfSales,
          image1: image1,
        },
        answer: (_numberOfSales * _price * (_commission / 100))
          .toFixed(2)
          .toString(),
        text: "",
      };
    case Skill.FINANCE_SIMPLE_INTEREST:
      let personName_ = nameSelector();
      let interestRate = Math.floor(Math.random() * 19) + 1;
      let principalAmount = Math.floor(Math.random() * 10000 + 1);
      let time = Math.floor(Math.random() * 10 + 1);

      return {
        questionType: QuestionType.FINANCE_SIMPLE_INTEREST_PROBLEM,
        interestModel: {
          personName: personName_,
          interestRate: interestRate,
          principalAmount: principalAmount,
          time: time,
          image1: image1,
        },
        answer: (principalAmount * (interestRate / 100) * time)
          .toFixed(2)
          .toString(),
        text: "",
      };
  }

  function getRandomDivisionQuestion(
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
};

export const generateMath1Questions = (skillId: number) => {
  let questions = [];
  // Each practice sessions only reinforces one skill as it is skill specific
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForMath1Skill(skillId));
  }
  return questions;
};

export const generateQuestionForMath2Skill = (skill: Skill): Question => {
  // Addition skills
  switch (skill) {
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
        DEFAULT_QUESTIONT_TYPES
      );
    case Skill.ADDITION_5_DIGIT:
      return getRandomBinaryQuestion(
        10000,
        100001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTIONT_TYPES
      );
    case Skill.ADDITION_6_DIGIT:
      return getRandomBinaryQuestion(
        100000,
        1000001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTIONT_TYPES
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

  // Subtraction Skills
  switch (skill) {
    case Skill.SUBTRACTION_4_DIGIT:
      return getRandomBinaryQuestion(
        1000,
        10001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTIONT_TYPES
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
        DEFAULT_QUESTIONT_TYPES
      );
    case Skill.SUBTRACTION_6_DIGIT:
      return getRandomBinaryQuestion(
        100000,
        1000001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTIONT_TYPES
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

  // Multiplication Skills
  switch (skill) {
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

  // Division skills
  switch (skill) {
    //All division questions min and maxs are in respect to the dividend
    case Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(10, 100, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_TENTH:
      return getRandomDivisionQuestion(100, 1000, skill);
  }
};
