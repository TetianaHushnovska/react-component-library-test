import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const Template = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Показуємо кнопку тільки якщо меню закрите */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            fontSize: "28px",
            cursor: "pointer",
            zIndex: 1002,
            color: "#007bff",
          }}
        >
          ☰
        </button>
      )}

      <SidebarMenu {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const OneLevel: Story = {
  render: Template,
  args: {
    items: [
      { label: "Home" },
      { label: "About" },
      { label: "Contact" },
    ],
  },
};

export const TwoLevels: Story = {
  render: Template,
  args: {
    items: [
      { label: "Dashboard" },
      {
        label: "Settings",
        children: [
          { label: "Profile" },
          { label: "Account" },
          { label: "Notifications" },
        ],
      },
      { label: "Help" },
    ],
  },
};
