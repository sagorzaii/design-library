import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InputCheckbox, {
  InputCheckboxProps,
} from "../ui/Inputs/InputCheckbox/InputCheckbox";

export default {
  title: "components/Inputs/InputCheckbox",
  component: InputCheckbox,
  tags: ["autodocs"],
} as Meta<InputCheckboxProps>;

type Story = StoryObj<InputCheckboxProps>;

const InputCheckboxComponent = ({ children }: any) => {
  return (
    <div style={{ width: "800px", border: "1px solid grey", padding: "20px" }}>
      {children}
    </div>
  );
};

export const InputCheckboxBasic: Story = {
  args: {},
  render: (args) => (
    <InputCheckboxComponent>
      {" "}
      <InputCheckbox id="apple" name="apple" label="Apple" />
      <InputCheckbox id="orange" name="orange" label="Orange" />
      <InputCheckbox id="kiwii" name="kiwii" label="Kiwii" />
    </InputCheckboxComponent>
  ),
};
