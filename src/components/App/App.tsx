import React from "react";
import styles from "./App.module.scss";
import clsx from "clsx";
import logoIcon from "./kicon2.png"
import profileIcon from "./profile.png"

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = ({ className }) => {

  return (
    <div className={clsx(styles.App, className)}>
      <div className={styles.container}>
          <div dir="rtl" className={styles.header}>
              <img className={styles.headerLogo} src={logoIcon} alt={"لوگو"}></img>
              <div className={styles.headerText}>خوشه</div>
              {/*<img className={styles.headerProfile} src={profileIcon} alt={"پروفایل"}></img>*/}
          </div>
          <div dir="rtl" className={styles.bannerFrame}>
              <div className={styles.banner}>بنر 1</div>
              <div className={styles.banner}>بنر 2</div>
              <div className={styles.banner}>بنر 3</div>
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
