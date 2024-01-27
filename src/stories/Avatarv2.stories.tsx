import type { Meta, StoryObj } from "@storybook/react";
import Avatarv2 from "../ui/Avatarv2/Avatarv2";

export default {
  title: "components/Avatarv2",
  component: Avatarv2,
  tags: ["autodocs"],
} as Meta<typeof Avatarv2>;

type Story = StoryObj<typeof Avatarv2>;

export const SmallAvatar: Story = {
  args: {
    size: "sm",
  },
};

export const MediumAvatar: Story = {
  args: {
    size: "md",
    fallbackName: "John Doe",
  },
};

export const LargeAvatar: Story = {
  args: {
    size: "lg",
    fallbackName: "Mary Jane",
  },
};

export const AvatarWithImage: Story = {
  args: {
    size: "md",
    source:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  },
};
