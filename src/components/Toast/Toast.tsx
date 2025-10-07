import React, { useState, useEffect } from "react";
import "./Toast.css";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ 
  message, 
  type = "info", 
  duration = 3000 
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button onClick={() => setShow(false)}>✖</button>
    </div>
  );
};
