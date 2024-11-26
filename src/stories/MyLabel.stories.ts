import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "AllCaps",
    allCaps: true,
  },
};

export const Secundary: Story = {
  args: {
    label: "Secundary",
    color: "text-secondary",
  },
};

export const CustomsColor: Story = {
  args: {
    label: "CustomsColor",
  },
};
