import { QuestionType } from "./questionTypes";
import { HorizontalEquationQuestion } from "./labs/questionGenerators/horizontalEquationQuestion";
import { TrueOrFalseQuestion } from "./labs/questionGenerators/trueOrFalseQuestion";
import { VerticalEquationQuestion } from "./labs/questionGenerators/verticalEquationQuestion";
import { VisualDotsQuestion } from "./labs/questionGenerators/visualDotsQuestion";
import { WordProblemQuestion } from "./labs/questionGenerators/wordProblemQuestion";
import { LongDivisionQuestion } from "./labs/questionGenerators/longDivisionQuestion";
import { ItemCostModel } from "./labs/finance/money/itemCostModel";
import { PersonData } from "./labs/finance/money/personData";
import { Coin, CoinType } from "../../components/questionTypes/finance/Coin";
import { AlgebraSolveQuestion } from "./labs/questionGenerators/algebraQuestionGenerator";

export type Question =
  | VerticalEquationQuestion
  | HorizontalEquationQuestion
  | {
      questionType: QuestionType.MULTIPLE_CHOICE_SENTENCE;
      multipleChoice: MCModel;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.MULTIPLE_CHOICE_WORD;
      answer: string;
      multipleChoice: MCModel;
      text: string;
    }
  | {
      questionType: QuestionType.MULTIPLE_CHOICE;
      answer: string;
      multipleChoice: MCModel;
      text: string;
    }
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
  | {
      questionType: QuestionType.MULTIPLICATION_EQUAL_GROUPS;
      text: string;
      answer: string;
      colour: 0 | 1 | 2 | 3;
    }
  | {
      questionType: QuestionType.FINANCE_TIP_PROBLEM;
      displayNum: number;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM;
      personDataModel: PersonData;
      answer: string;
    }
  | {
      questionType: QuestionType.FINANCE_BUDGET_TABLE_PROBLEM;
      budgetCostModel: Array<ItemCostModel>;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.FINANCE_UNIT_PRICE_PROBLEM;
      unitPriceModel: UnitPriceModel;
      answer: string;
      text: string;
    }
  | AlgebraSolveQuestion
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

export type MCOption = {
  id: string;
  text: string;
};
export type MCModel = {
  title?: string;
  options: Array<MCOption>;
};

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

export type CountingModel = {
  coins: CoinType[];
   
}