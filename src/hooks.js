import React from "react";

export default function useEscapeKey(escapeHandler) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.code === "Escape") {
        escapeHandler(event);
      }
    }
    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [escapeHandler]);
}
