import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InputToggle, {
  InputToggleProps,
} from "../ui/Inputs/InputToggle/InputToggle";

export default {
  title: "components/Inputs/InputToggle",
  component: InputToggle,
  tags: ["autodocs"],
} as Meta<InputToggleProps>;

type Story = StoryObj<InputToggleProps>;

export const InputTogglePrimary: Story = {
  args: {
    id: "unemployed",
    name: "unemployed",
    theme: "primary",
  },
  render: (args) => <InputToggle {...args} />,
};

export const InputToggleSuccess: Story = {
  args: {
    id: "unemployed",
    name: "unemployed",
    theme: "success",
  },
  render: (args) => <InputToggle {...args} />,
};

export const InputToggleDanger: Story = {
  args: {
    id: "unemployed",
    name: "unemployed",
    theme: "danger",
  },
  render: (args) => <InputToggle {...args} />,
};

export const InputToggleCustom: Story = {
  args: {
    id: "unemployed",
    name: "unemployed",
    customColor: "black",
  },
  render: (args) => <InputToggle {...args} />,
};

export const InputToggleDisabled: Story = {
  args: {
    id: "unemployed",
    name: "unemployed",
    isDisabled: true,
  },
  render: (args) => <InputToggle {...args} />,
};
