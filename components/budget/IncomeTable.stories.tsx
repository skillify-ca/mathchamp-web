import React from "react";
import { Story, Meta } from "@storybook/react";

import IncomeTable, { incomeTableProps } from "./IncomeTable";

export default {
  title: "finance/IncomeTable",
  component: IncomeTable,
  argTypes: {},
} as Meta;

const Template: Story<incomeTableProps> = (args) => <IncomeTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
