import { useState } from "react";

import { SidebarMenu } from "./components/SidebarMenu/SidebarMenu";
import { Input } from "./components/Input/Input";
import { Toast } from "./components/Toast/Toast";

function App() {
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toasts array (stack)
  const [toasts, setToasts] = useState<
    { id: number; message: string; type: string }[]
  >([]);

  const addToast = (message: string, type: string = "info") => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove toast after 3s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

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

  return (
    <div style={{ padding: "20px" }}>
      {/* ===== SIDEBAR BUTTON ===== */}
      <button onClick={() => setSidebarOpen(true)}>Відкрити меню</button>

      {/* ===== SIDEBAR ===== */}
      <SidebarMenu
        items={menuItems}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <h1>Компоненти на живій сторінці</h1>

      {/* ===== TOAST BUTTONS ===== */}
      <h2>Toast повідомлення</h2>

      <button onClick={() => addToast("Info message!", "info")}>
        Info Toast
      </button>

      <button onClick={() => addToast("Everything is successful!", "success")}>
        Success Toast
      </button>

      <button onClick={() => addToast("Щось пішло не так...", "error")}>
        Error Toast
      </button>

      <button onClick={() => addToast("Попередження!", "warning")}>
        Warning Toast
      </button>

      {/* ===== INPUTS ===== */}
      <h2>Інпути</h2>

      <Input placeholder="Звичайний інпут" />
      <br />
      <br />

      <Input type="password" placeholder="Пароль" />
      <br />
      <br />

      <Input clearable placeholder="Інпут з очисткою" />

      {/* ===== TOASTS STACK ===== */}
      <div>
        {toasts.map((t) => (
          <Toast key={t.id} message={t.message} type={t.type as any} />
        ))}
      </div>
    </div>
  );
}

export default App;
