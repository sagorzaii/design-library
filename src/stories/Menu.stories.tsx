import type { Meta, StoryObj } from "@storybook/react";
import Menu from "../ui/Menu/Menu";

export default {
  title: "navigation/Menu",
  component: Menu,
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  args: {
    items: [
      {
        label: "Oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        key: "1",
        title: "One",
      },
      {
        label: "Two",
        key: "2",
        title: "Two",
      },
      {
        label: "Three",
        key: "3",
        title: "Three",
        disabled: true,
      },
    ],
  },
};
