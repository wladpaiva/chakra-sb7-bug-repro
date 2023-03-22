import React from "react";
import { Box } from "@chakra-ui/react";
import { CustomInput } from "./CustomInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CustomInput> = {
  title: "Custom Input",
  component: CustomInput,
  args: {
    onChange: () => {},
    value: "I am the value",
    placeholder: "I am the placeholder",
  },
  argTypes: {
    value: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    isInvalid: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    isDisabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    isReadOnly: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

export const Default: Story = {};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focusVisible: true },
  },
};
