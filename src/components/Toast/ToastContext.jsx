import { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import "./Toast.scss";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ show: false, message: "", type: "info" });

  const showToast = useCallback((message, type = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {typeof document !== 'undefined' && createPortal(
        <div className={`cb-toast-wrapper ${toast.show ? "show" : ""}`}>
          <div className={`cb-toast cb-toast-${toast.type}`}>
            <div className="cb-toast-icon">
              {toast.type === "success" && "✅"}
              {toast.type === "error" && "❌"}
              {toast.type === "warning" && "⚠️"}
              {toast.type === "info" && "ℹ️"}
            </div>
            <div className="cb-toast-content">{toast.message}</div>
            <div className="cb-toast-progress"></div>
          </div>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

