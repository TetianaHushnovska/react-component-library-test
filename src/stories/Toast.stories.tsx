import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components/Toast/Toast";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: "Everything saved successfully!",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    message: "Something went wrong!",
    type: "error",
  },
};

export const Info: Story = {
  args: {
    message: "This is an informational message.",
    type: "info",
  },
};

export const Warning: Story = {
  args: {
    message: "Be careful — something might be wrong.",
    type: "warning",
  },
};
