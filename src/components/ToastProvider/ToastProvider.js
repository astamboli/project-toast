import React from "react";
import useEscapeKey from "../../hooks";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  function CreateToast(text, option) {
    setToasts([...toasts, { option, text, id: crypto.randomUUID() }]);
  }

  useEscapeKey(() => setToasts([]));
  function handleDismiss(id) {
    const toastsCopy = [...toasts].filter((toast) => {
      return toast.id !== id;
    });

    setToasts(toastsCopy);
  }
  const [toasts, setToasts] = React.useState([]);

  return (
    <ToastsContext.Provider value={{ toasts, handleDismiss, CreateToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
