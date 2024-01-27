import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InputText, { InputTextProps } from "../ui/Inputs/InputText/InputText";

export default {
  title: "components/Inputs/InputText",
  component: InputText,
  tags: ["autodocs"],
} as Meta<InputTextProps>;

type Story = StoryObj<InputTextProps>;

const InputTextComponent = ({ children }: any) => {
  return (
    <div style={{ width: "800px", border: "1px solid grey", padding: "20px" }}>
      {children}
    </div>
  );
};

export const InputTextWithLabel: Story = {
  args: {
    defaultValue: "",
    label: "With Label",
    borderRadius: "squared",
    isDisabled: false,
    isReadOnly: false,
    isBlocked: false,
    maxLength: 10,
  },
  render: (args) => (
    <InputTextComponent>
      <InputText {...args} />
      max length is 10
    </InputTextComponent>
  ),
};

export const InputTextBlockWithLabel: Story = {
  args: {
    defaultValue: "Hello World!",
    label: "Blocked with Label",
    placeholder: "",
    borderRadius: "rounded",
    isDisabled: false,
    isReadOnly: false,
    isBlocked: false,
  },
  render: (args) => (
    <InputTextComponent>
      <InputText isBlocked={true} {...args} />
    </InputTextComponent>
  ),
};

export const InputTextWithPlaceholder: Story = {
  args: {
    defaultValue: "",
    label: "",
    placeholder: "without blocked & label",
    borderRadius: "circled",
    isDisabled: false,
    isReadOnly: false,
    isBlocked: false,
  },
  render: (args) => (
    <InputTextComponent>
      <InputText {...args} />
    </InputTextComponent>
  ),
};
