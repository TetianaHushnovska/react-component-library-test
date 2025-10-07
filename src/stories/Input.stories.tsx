import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};

export const Clearable: Story = {
  args: {
    type: "text",
    placeholder: "Clearable input",
    clearable: true,
  },
};

export const PasswordWithClear: Story = {
  args: {
    type: "password",
    placeholder: "Password input",
    clearable: true,
  },
};
