import { name } from "../names";
import { QuestionType } from "../questionTypes";
import { getRandomItemFromArray, getRndInteger } from "../random";

export type AlgebraWordProblem = {
  questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE;
  algebraWordProblemModel: AlgebraWordProblemModel;
  answer: string;
};
export type AlgebraWordProblemModel = {
  variableLetter: string;
  variableProblem: string;
  answer: string;
  personName: string;
};

type AlgebraObject = {
  algebraProblem: string;
  algebraSolution: string;
};

export function algebraHelper(): AlgebraObject {
  let problemtype = getRandomItemFromArray(["-", "+", "/", "x"]);
  const a = getRndInteger(1, 50);
  const b = getRndInteger(1, 50);
  const d = a + getRndInteger(1, 50);
  const e = getRndInteger(2, 10);
  const f = getRndInteger(1, 10);
  const g = getRndInteger(2, 10) * e;
  if (problemtype == "+") {
    const problem: AlgebraObject = {
      algebraProblem:
        " " + problemtype + " " + a.toString() + " = " + d.toString(),
      algebraSolution: (d - a).toString(),
    };
    return problem;
  } else if (problemtype == "-") {
    const problem: AlgebraObject = {
      algebraProblem:
        " " + problemtype + " " + a.toString() + " = " + b.toString(),
      algebraSolution: (b + a).toString(),
    };
    return problem;
  } else if (problemtype == "/") {
    const problem: AlgebraObject = {
      algebraProblem:
        "  " + problemtype + " " + e.toString() + " = " + f.toString(),
      algebraSolution: (e * f).toString(),
    };
    return problem;
  } else {
    const problem: AlgebraObject = {
      algebraProblem:
        "  " + problemtype + " " + e.toString() + " = " + g.toString(),
      algebraSolution: (g / e).toString(),
    };
    return problem;
  }
}

export function generateAlgebraQuestion(): AlgebraWordProblem {
  let algebraproblem = algebraHelper();
  return {
    questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE,
    algebraWordProblemModel: {
      variableLetter: getRandomItemFromArray([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "y",
        "z",
      ]),
      variableProblem: algebraproblem.algebraProblem,
      answer: algebraproblem.algebraSolution,
      personName: getRandomItemFromArray(name),
    },
    answer: algebraproblem.algebraSolution,
  };
}
