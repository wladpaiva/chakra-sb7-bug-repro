import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@chakra-ui/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Hover: Story = {
  args: {
    children: "Button",
  },
  parameters: { pseudo: { hover: true } },
};
