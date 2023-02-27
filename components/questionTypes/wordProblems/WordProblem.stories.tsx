import React from "react";
import { Story, Meta } from "@storybook/react";

import { WordProblemAdd, WordProblemAddProp } from "./WordProblemAdd";
import { QuestionType } from "../../../pages/api/questionTypes";
import Card from "../../ui/Card";
import { Skill } from "../../../pages/api/skills";
import { createWordProblemModel } from "../../../pages/api/questionGenerators/questionTypes/wordProblemQuestion";

export default {
  title: "math/Word Problem Simple",
  component: WordProblemAdd,
  argTypes: {},
} as Meta;

const Template: Story<WordProblemAddProp> = (args) => {
  return (
    <Card size="large">
      <WordProblemAdd {...args} />
    </Card>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  question: {
    text: "2 + 2",
    wordProblem: createWordProblemModel("+"),
    questionType: QuestionType.BINARY_WORD_PROBLEM,
    answer: "0",
    skill: Skill.ADDITION_SINGLE,
  },
};
