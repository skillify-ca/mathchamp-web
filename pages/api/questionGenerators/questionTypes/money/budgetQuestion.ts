import { ItemCostModel } from "../../../../../components/questionTypes/finance/budget/BalanceBudgetData";
import { ItemDataTable } from "../../../../../components/questionTypes/finance/budget/BudgetTableData";
import { QuestionType } from "../../../questionTypes";
import { getRndHundredthsDecimal } from "../../../random";

export type BudgetTableQuestion = {
  questionType: QuestionType.FINANCE_BUDGET_TABLE_PROBLEM;
  budgetCostModel: Array<ItemCostModel>;
  answer: string;
  text: string;
};

export function getBudgetQuestion(
  tape: number,
  bulb: number
): BudgetTableQuestion {
  let total = tape + bulb;
  let budget = 5;
  let answer = budget >= total ? "Yes" : "No";

  const PriceCostTable: ItemCostModel[] = ItemDataTable.map((item) => {
    if (item.title === "Roll of Electrical Tape") {
      return { title: item.title, cost: tape };
    } else if (item.title === "Light Bulb") {
      return { title: item.title, cost: bulb };
    } else {
      return { title: item.title, cost: getRndHundredthsDecimal(0, 5) };
    }
  });

  return {
    text: budget.toString(),
    answer: answer.toString(),
    questionType: QuestionType.FINANCE_BUDGET_TABLE_PROBLEM,
    budgetCostModel: PriceCostTable,
  };
}
