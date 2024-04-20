import type { Meta, StoryObj } from "@storybook/react";
import { Colors } from "./Colors";

const meta: Meta<typeof Colors> = {
  title: "Styleguide/Colors",
  component: Colors,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ColorPallettes: Story = {};
