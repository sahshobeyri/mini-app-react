import React, {useState} from "react";
import styles from "./backupApp.module.scss";
import clsx from "clsx";
import { useShowPopup } from "@vkruglikov/react-telegram-web-app";
// import react from "@vitejs/plugin-react";

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = ({ className }) => {
  const lessons = [
    {
      title: "عادت های اتمی",
      description: "هنر ساخت عادت های خوب، و تغییر زندگی با قدم های کوچک.",
      author: "سیدامیرحسین شبیری",
      introImg: "https://github.com/sahshobeyri/khooshe-js-bot/blob/master/img/lessons/l4/intro.PNG?raw=true"
    },
    {
      title: "تفکر سیستمی",
      description: "آشنایی با مبانی تفکر سیستمی، یک پنجره جدید برای نگاه به جهان.",
      author: "مجید زنجیران",
      introImg: "https://github.com/sahshobeyri/khooshe-js-bot/blob/master/img/lessons/l3/intro.PNG?raw=true"
    },
  ];
  const showPopup = useShowPopup();
  const [currentLesson, setCurrentLesson] = useState(0)

  const lessonItem = (idx: number) => {
    const l = lessons[idx]
    return (<div className={styles.lessonCard} dir="rtl">
      <img width="150" src={l.introImg} alt={l.title + "img"}/>
      <div className={styles.lessonTitle}>{l.title}</div>
      <div className={styles.lessonSubtitle}>{l.description}</div>
      <div className={styles.lessonSubtitle}>{"توسط: " + l.author}</div>
    </div>);
  }
  const nextLesson = () => {
    if (currentLesson < lessons.length-1) {
      setCurrentLesson(currentLesson + 1)
    }
  }
  const previousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1)
    }
  }
  const lessonSlider = <div className={styles.lessonSlider}>
    <div className={styles.lessonSliderBtn} onClick={previousLesson}>
      ◀️
    </div>
    {lessonItem(currentLesson)}
    <div className={styles.lessonSliderBtn} onClick={nextLesson}>
      ▶️
    </div>
  </div>
  const showPopupOnClick = async () => {
    const message =
        "ممنون که خوشه رو برای یادگیری انتخاب کردید. قول میدم پشیمون نشید.";
    await showPopup({ title: "به به!", message: message });
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
          اینجا کجاست؟
        </button>

        <h1 className={styles.subtitle}>درس ها</h1>
        {lessonSlider}
      </div>
    </div>
  );
};
