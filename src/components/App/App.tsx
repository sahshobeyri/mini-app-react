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
    await showPopup({ title: "به به!", message: message });
  };

  const showPopupOnSelectLesson = async (lessonTitle: string) => {
    const message = 'ممنون که درس ' + lessonTitle + ' رو انتخاب کردید.'
    await showPopup({ title: 'انتخاب درس', message: message});
  }

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

        <h1 className={styles.subtitle}>درس ها</h1>
        <div>
          <img src="https://github.com/sahshobeyri/khooshe-js-bot/blob/master/img/lessons/l3/intro.PNG"
               alt="system thinking image"/>
          <h1 className={styles.subtitle}>تفکر سیستمی</h1>
        </div>
        <div>
          <img src="https://github.com/sahshobeyri/khooshe-js-bot/blob/master/img/lessons/l4/intro.PNG"
               alt="atomic habits image"/>
          <h1 className={styles.subtitle}>عادت های اتمی</h1>
        </div>
        {/*<button*/}
        {/*    dir="rtl"*/}
        {/*    onClick={showPopupOnSelectLesson('عادت های اتمی')}*/}
        {/*    className={styles.clickMe}>*/}
        {/*  ⭐️ عادت های اتمی*/}
        {/*</button>*/}
        {/*<button*/}
        {/*    dir="rtl"*/}
        {/*    onClick={showPopupOnSelectLesson('تفکر سیستمی')}*/}
        {/*    className={styles.clickMe}>*/}
        {/*  ⭐️ تفکر سیستمی*/}
        {/*</button>*/}

      </div>
    </div>
  );
};
