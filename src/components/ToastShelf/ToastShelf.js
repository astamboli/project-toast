import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastsContext } from "../ToastProvider/ToastProvider";

function ToastShelf({ handleDismiss }) {
  const { toasts } = React.useContext(ToastsContext);
  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="notifications"
      className={styles.wrapper}
    >
      {toasts.map((toast) => (
        <li id={toast.id} key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            key={toast.id}
            handleDismiss={handleDismiss}
            variant={toast.option}
          >
            {toast.text}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
