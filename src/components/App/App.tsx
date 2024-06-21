import React from "react";
import styles from "./App.module.scss";
import clsx from "clsx";

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = ({ className }) => {

  return (
    <div className={clsx(styles.App, className)}>
      <div className={styles.container}>
          <div className={styles.header}>
              <div>(آیکون)</div>
              <div>خوشه</div>
              <div>پروفایل</div>
          </div>
      </div>
        {/*<div className={styles.container}>*/}
      {/*  <a*/}
      {/*      href="https://github.com/usernein/react-mini-app"*/}
      {/*      target="_blank"*/}
      {/*      className={styles.githubLink}*/}
      {/*  >*/}
      {/*    <h1 className={styles.title}>خوشه، یادگیری حبه حبه</h1>*/}
      {/*  </a>*/}

      {/*  <button dir="rtl" onClick={showPopupOnClick} className={styles.clickMe}>*/}
      {/*    اینجا کجاست؟*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  );
};
