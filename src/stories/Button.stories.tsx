import type { Meta, StoryObj } from "@storybook/react";
import Button from "../ui/Button/Button";

export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click Me",
    type: "primary",
  },
};

export const Success: Story = {
  args: {
    label: "Click Me",
    type: "success",
  },
};

export const Danger: Story = {
  args: {
    label: "Click Me",
    type: "danger",
  },
};

export const Warning: Story = {
  args: {
    label: "Click Me",
    type: "warning",
  },
};
