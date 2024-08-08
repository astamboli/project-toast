import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastsContext } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, id }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const stls = {
    notice: styles.notice,
    warning: styles.warning,
    success: styles.success,
    error: styles.error,
  };
  const { handleDismiss } = React.useContext(ToastsContext);
  return (
    <div className={`${styles.toast} ${stls[variant]}`}>
      <div className={styles.iconContainer}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => handleDismiss(id)}
        className={styles.closeButton}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
