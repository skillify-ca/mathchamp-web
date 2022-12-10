import { personDataTable } from "../../../components/questionTypes/finance/budget/BalanceBudgetData";
import { Question } from "../question";
import { QuestionType } from "../questionTypes";
import { getRndHundredthsDecimal, getRndInteger } from "../random";
import { Skill } from "../skills";
import { animalsMap, fruitsMap } from "../WordProblemModelObjects";
import { randomize } from "./binaryQuestionGenerator";
import { getBalanceBudgetQuestion } from "./questionTypes/money/balanceBudgetQuestion";
import { getBudgetQuestion } from "./questionTypes/money/budgetQuestion";
import { getTipQuestion } from "./questionTypes/money/tipQuestion";
import {
  getRandomItemFromMap,
  nameSelector,
} from "./questionTypes/wordProblemQuestion";

export function generateFinanceQuestion(skill: Skill): Question {
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
      // TODO fix the bug in this question
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
          price: price,
          number: price,
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
}
