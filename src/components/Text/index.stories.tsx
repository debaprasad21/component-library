import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const P: Story = {
  args: {
    as: "h1",
    children: "Heading 1",
    size: "3xl",
  },
};

export const SPAN: Story = {
  args: {
    as: "h2",
    children: "Heading 2",
    size: "2xl",
  },
};
