import { useState } from "react";

type ToastType = "info" | "success" | "error";
import "./App.css";

import { SidebarMenu } from "./components/SidebarMenu/SidebarMenu";
import { Input } from "./components/Input/Input";
import { Toast } from "./components/Toast/Toast";

function App() {
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toast state
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("info");

  const menuItems = [
    { label: "Dashboard" },
    {
      label: "Products",
      children: [{ label: "Create Product" }, { label: "Product List" }],
    },
    {
      label: "Settings",
      children: [{ label: "Profile" }, { label: "Billing" }],
    },
  ];

  const showToast = (
    msg: string,
    type: "info" | "success" | "error" = "info"
  ) => {
    setToastMessage(msg);
    setToastType(type);
    setToastVisible(true);

    // Toast automatically hides after its own duration
    // But if user clicks "show" several times — we re-trigger timeout
  };

  return (
    <div style={{ padding: "2rem" }}>
      {/* ---------- SIDEBAR ---------- */}
      <button
        onClick={() => setSidebarOpen(true)}
        style={{
          padding: "0.6rem 1rem",
          marginBottom: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        Відкрити меню
      </button>

      <SidebarMenu
        items={menuItems}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* ---------- TOAST BUTTONS ---------- */}
      <h1>Компоненти на живій сторінці</h1>

      <button
        onClick={() => showToast("Це інформаційне повідомлення!", "info")}
        style={{ marginRight: "1rem" }}
      >
        Info Toast
      </button>

      <button
        onClick={() => showToast("Все успішно виконано!", "success")}
        style={{ marginRight: "1rem" }}
      >
        Success Toast
      </button>

      <button
        onClick={() => showToast("Щось пішло не так...", "error")}
        style={{ marginRight: "1rem" }}
      >
        Error Toast
      </button>

      {/* ---------- INPUTS ---------- */}
      <h2 style={{ marginTop: "2rem" }}>Інпути</h2>

      <Input placeholder="Звичайний інпут" />
      <br />
      <br />

      <Input type="password" placeholder="Пароль" />
      <br />
      <br />

      <Input clearable placeholder="Інпут з очисткою" />

      {/* Render Toast */}
      {toastVisible && (
        <Toast message={toastMessage} type={toastType} duration={3000} />
      )}
    </div>
  );
}

export default App;
