import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../ui/Avatar/Avatar";

export default {
  title: "components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const SmallAvatar: Story = {
  args: {
    size: "sm",
    borderRadius: "circled",
  },
};
export const MediumAvatar = {
  args: {
    size: "md",
    borderRadius: "rounded",
  },
};

export const LargeAvatar = {
  args: {
    size: "lg",
    borderRadius: "circled",
  },
};
