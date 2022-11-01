import { ItemCostModel } from "../../../../components/questionTypes/finance/budget/BalanceBudgetData";
import { ItemDataTable } from "../../../../components/questionTypes/finance/budget/BudgetTableData";
import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { getRndHundredthsDecimal } from "../../random";

export function getBudgetQuestion(tape: number, bulb: number): Question {
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