import { QuestionType } from "../../../questionTypes";

export type FinanceTipQuestion = {
  questionType: QuestionType.FINANCE_TIP_PROBLEM;
  displayNum: number;
  answer: string;
  text: string;
};

export function getTipQuestion(tip: number, bill: number): FinanceTipQuestion {
  const percent = tip / 100;
  return {
    text: tip.toString(),
    answer: Math.round(bill * percent).toString(),
    questionType: QuestionType.FINANCE_TIP_PROBLEM,
    displayNum: bill,
  };
}
