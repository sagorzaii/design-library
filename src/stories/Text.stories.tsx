import type { Meta, StoryObj } from "@storybook/react";
import Text from "../ui/Text/Text";

export default {
  title: "typography/Text",
  component: Text,
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Paragraph: Story = {
  args: {
    content:
      "I love sagorzaii because he is so handsome, charismatic, honest, sweet, kind & thoughtful.",
    category: "text",
  },
};

export const Keyboard: Story = {
  args: {
    content: "Ctrl C",
    category: "keyboard",
  },
};

export const Code: Story = {
  args: {
    content: "<h1>Hello World!</h1>",
    category: "code",
  },
};

export const Link: Story = {
  args: {
    content: "hover here",
    category: "link",
  },
};
