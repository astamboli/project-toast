import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastsContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [option, setOption] = React.useState("notice");
  const [text, setText] = React.useState("");

  const { CreateToast } = React.useContext(ToastsContext);
  function handleSubmit(event) {
    event.preventDefault();
    CreateToast(text, option);
    setText("");
    setOption("notice");
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((entry) => (
              <label key={entry} htmlFor={`variant-${entry}`}>
                <input
                  key={entry}
                  id={`variant-${entry}`}
                  type="radio"
                  name="variant"
                  value={entry}
                  checked={option === entry}
                  onChange={(event) => setOption(event.target.value)}
                />
                {entry}
              </label>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </form>
      </div>
      <ToastShelf />
    </div>
  );
}

export default ToastPlayground;
