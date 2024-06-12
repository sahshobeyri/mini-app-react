import React, {useState} from "react";
import { useState} from "react";
import styles from "./App.module.scss";
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
      introImg: "https://github.com/sahshobeyri/khooshe-js-bot/blob/master/img/lessons/l4/intro.PNG?raw=true"
    },
    {
      title: "تفکر سیستمی",
      introImg: "https://github.com/sahshobeyri/khooshe-js-bot/blob/master/img/lessons/l3/intro.PNG?raw=true"
    },
  ];
  const showPopup = useShowPopup();
  const [currentLesson, setCurrentLesson] = useState(0)
  // const [image,setImage] = useState("");
  // const fetchImage = async (idx:number) => {
  //   const res = await fetch(imageUrls[idx]);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImage(imageObjectURL);
  // };
  // useEffect(() => {
  //   fetchImage().then();
  // }, []);

  const lessonItem = (l) => {
    return (<div className={styles.lessonCard}>
      <img width="150" src={l.introImg} alt={l.title + "img"}/>
      {l.title}
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
  // const lessonsListItems = lessons.map(l =><div className={styles.lessonCard}>
  //   <img width="150" src={l.introImg} alt={l.title + "img"}/>
  //   {l.title}
  // </div>)
  const lessonSlider = <div className={styles.lessonSlider}>
    <div className={styles.lessonSliderBtn} onClick={nextLesson}>
      ▶️
    </div>
    {lessonItem(currentLesson)}
    <div className={styles.lessonSliderBtn} onClick={previousLesson}>
      ◀️
    </div>
  </div>
  const showPopupOnClick = async () => {
    const message =
        "ممنون که خوشه رو برای یادگیری انتخاب کردید. قول میدم پشیمون نشید.";
    await showPopup({ title: "به به!", message: message });
  };

  // const showPopupOnSelectLesson = async (lessonTitle: string) => {
  //   const message = 'ممنون که درس ' + lessonTitle + ' رو انتخاب کردید.'
  //   await showPopup({ title: 'انتخاب درس', message: message});
  // }

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
        {/*<div>*/}
        {/*  <img width={150} src={imageUrls[0]}*/}
        {/*       alt="system thinking image"/>*/}
        {/*  <h1 className={styles.subtitle} align={"center"}>تفکر سیستمی</h1>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img width={150} src={imageUrls[1]}*/}
        {/*       alt="atomic habits image"/>*/}
        {/*  <h1 className={styles.subtitle}>عادت های اتمی</h1>*/}
        {/*</div>*/}
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
