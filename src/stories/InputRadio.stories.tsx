import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InputRadio, {
  InputRadioProps,
} from "../ui/Inputs/InputRadio/InputRadio";

export default {
  title: "components/Inputs/InputRadio",
  component: InputRadio,
  tags: ["autodocs"],
} as Meta<InputRadioProps>;

type Story = StoryObj<InputRadioProps>;

export const Radio: Story = {
  render: () => (
    <>
      <InputRadio id="name" label="name" value="name" />
      <InputRadio id="age" label="age" value="age" />
      <InputRadio id="gender" label="gender" value="gender" />
    </>
  ),
};
