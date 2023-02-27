import React from "react";
import { Story, Meta } from "@storybook/react";
import TipQuestion, { TipQuestionProps } from "./TipQuestion";
import { QuestionType } from "../../../../pages/api/questionTypes";
import { FinanceTipQuestion } from "../../../../pages/api/questionGenerators/questionTypes/money/tipQuestion";

export default {
  title: "finance/Tip Question",
  component: TipQuestion,
  argTypes: {},
} as Meta;

const Template: Story<TipQuestionProps> = (args) => <TipQuestion {...args} />;

export const Primary = Template.bind({});
const question: FinanceTipQuestion = {
  text: "Question",
  answer: "1.5",
  questionType: QuestionType.FINANCE_TIP_PROBLEM,
  displayNum: 3,
};
Primary.args = {
  tip: 20,
  question,
};
