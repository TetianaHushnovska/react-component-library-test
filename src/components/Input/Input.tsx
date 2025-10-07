import React, { useState } from "react";
import css from "./Input.module.css";

interface InputProps {
  type?: "text" | "password" | "number";
  placeholder?: string;
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  clearable = false,
}) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" && showPassword ? "text" : type;

  const handleClear = () => {
    setValue("");
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container" style={{ position: "relative", display: "inline-block" }}>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={css.input}
      />

      {/* Кнопка для показу/приховування пароля */}
      {type === "password" && (
        <button
          type="button"
          onClick={togglePassword}
          style={{
            position: "absolute",
            right: clearable ? "2rem" : "0.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {showPassword ? "✖️" : "👁️"}
        </button>
      )}

      {/* Кнопка для очищення поля */}
      {clearable && value && (
        <button
          type="button"
          onClick={handleClear}
          style={{
            position: "absolute",
            right: "0.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          ✖
        </button>
      )}
    </div>
  );
};
