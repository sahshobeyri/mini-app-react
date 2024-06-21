import React from "react";
import styles from "./App.module.scss";
import clsx from "clsx";
import logo from "./kicon.png"

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = ({ className }) => {

  return (
    <div className={clsx(styles.App, className)}>
      <div className={styles.container}>
          <div dir="rtl" className={styles.header}>
              {/*<div className={styles.headerText}>(آیکون)</div>*/}
              <img src={logo} className={styles.headerImage} alt={"لوگو"}></img>
              <div className={styles.headerText}>خوشه</div>
              <div className={styles.headerText}>پروفایل</div>
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
