import { QuestionType } from "../../../questionTypes";
import { CountingModel } from "../coinsQuestionsGenerator";
import { BudgetBalanceQuestion } from "./balanceBudgetQuestion";
import { BudgetTableQuestion } from "./budgetQuestion";
import { FinanceTipQuestion } from "./tipQuestion";

export type UnitPriceModel = {
  total: number;
  numberOfObjects: number;
  name: string;
  image: string;
  singularFruit: string;
  pluralFruit: string;
};
export type SalesTaxModel = {
  price: number;
  number: number;
  taxRate: number;
  personName: string;
  image1: string;
  multipleAnimals: string;
  numberOfToys: number;
};
export type CommissionModel = {
  personName: string;
  commission: number;
  price: number;
  numberOfSales: number;
  image1: string;
};
export type InterestModel = {
  personName: string;
  principalAmount: number;
  interestRate: number;
  time: number;
  image1: string;
};

export type FinanceQuestion =
  | FinanceTipQuestion
  | BudgetBalanceQuestion
  | BudgetTableQuestion
  | {
      questionType: QuestionType.FINANCE_UNIT_PRICE_PROBLEM;
      unitPriceModel: UnitPriceModel;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.FINANCE_SALES_TAX_PROBLEM;
      salesTaxModel: SalesTaxModel;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.FINANCE_COMMISSION_PROBLEM;
      commisionModel: CommissionModel;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.FINANCE_SIMPLE_INTEREST_PROBLEM;
      interestModel: InterestModel;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.FINANCE_COUNTING_COINS_BILLS_PROBLEM;
      countingModel: CountingModel;
      answer: string;
      text: string;
    };
