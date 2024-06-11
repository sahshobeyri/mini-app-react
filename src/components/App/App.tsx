import React from "react";
import styles from "./App.module.scss";
import clsx from "clsx";
import { useShowPopup } from "@vkruglikov/react-telegram-web-app";

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = ({ className }) => {
  const showPopup = useShowPopup();

  const showPopupOnClick = async () => {
    const message =
      "ممنون که خوشه رو برای یادگیری انتخاب کردید. قول میدم پشیمون نشید.";
    await showPopup({ title: "Hey!", message: message });
  };

  return (
    <div className={clsx(styles.App, className)}>
      <div className={styles.container}>
        <a
            href="https://github.com/usernein/react-mini-app"
            target="_blank"
            className={styles.githubLink}
        >
          <h1 className={styles.title}>خوشه، یادگیری حبه حبه</h1>
        </a>

        <button dir="rtl" onClick={showPopupOnClick} className={styles.clickMe}>
          روی من کلیک کن.
        </button>

        <h1>درس ها</h1>
        <button dir="rtl" onClick={showPopupOnClick} className={styles.clickMe}>
          ⭐️ عادت های اتمی
        </button>
        <button dir="rtl" onClick={showPopupOnClick} className={styles.clickMe}>
          ⭐️ تفکر سیستمی
        </button>

      </div>
    </div>
  );
};
