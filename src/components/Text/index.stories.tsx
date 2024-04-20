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

export const H1: Story = {
  args: {
    as: "h1",
    children: "Heading 1",
    size: "3xl",
  },
};

export const H2: Story = {
  args: {
    as: "h2",
    children: "Heading 2",
    size: "2xl",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
    children: "Heading 3",
    size: "xl",
  },
};

export const H4: Story = {
  args: {
    as: "h4",
    children: "Heading 4",
    size: "lg",
  },
};

export const H5: Story = {
  args: {
    as: "h5",
    children: "Heading 5",
    size: "base",
  },
};

export const H6: Story = {
  args: {
    as: "h6",
    children: "Heading 6",
    size: "sm",
  },
};
