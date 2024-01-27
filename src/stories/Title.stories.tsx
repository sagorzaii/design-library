import type { Meta, StoryObj } from "@storybook/react";
import Title from "../ui/Title/Title";

export default {
  title: "typography/Title",
  component: Title,
} as Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const Main: Story = {
  args: {
    label: "Main Title",
    type: "main",
  },
};

export const SubTitle: Story = {
  args: {
    label: "Main Title",
    type: "sub",
  },
};

export const Heading1: Story = {
  args: {
    label: "Main Title",
    type: "h1",
  },
};

export const Heading2: Story = {
  args: {
    label: "Main Title",
    type: "h2",
  },
};

export const Heading3: Story = {
  args: {
    label: "Main Title",
    type: "h3",
  },
};

export const ButtonTitle: Story = {
  args: {
    label: "Main Title",
    type: "button",
  },
};
