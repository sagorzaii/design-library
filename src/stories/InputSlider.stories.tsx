import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InputSlider, {
  InputSliderProps,
} from "../ui/Inputs/InputSlider/InputSlider";

export default {
  title: "components/Inputs/InputSlider",
  component: InputSlider,
  tags: ["autodocs"],
} as Meta<InputSliderProps>;

type Story = StoryObj<InputSliderProps>;

export const NormalSlider: Story = {
  args: {
    leftLabel: "0",
    rightLabel: "1000",
    max: "1000",
    min: "0",
    step: "10",
  },
  render: (args) => <InputSlider {...args} />,
};

export const VerticalSlider: Story = {
  args: {
    leftLabel: "0",
    rightLabel: "1000",
    max: "1000",
    min: "0",
    step: "10",
    direction: "vertical",
  },
  render: (args) => <InputSlider {...args} />,
};
