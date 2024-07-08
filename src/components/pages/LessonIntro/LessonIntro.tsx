import React from "react";
import styles from "./LessonIntro.module.scss";
import clsx from "clsx";
// import {MainFooter} from "../../MainFooter/MainFooter.tsx"
import BackIcon from "./BackBtn.png"
import IntroPic from "./IntroPic.png"
import {NavLink} from "react-router-dom";

export type LessonIntroProps = {
  className?: string;
};
export const LessonIntro: React.FC<LessonIntroProps> = ({ className }) => {

  return (
    <div className={clsx(styles.LessonIntro, className)}>
        <div className={styles.container}>
            <div dir="rtl" className={styles.header}>
                <NavLink to="/">
                    <img className={styles.headerBackBtn} src={BackIcon} alt="back-btn"></img>
                </NavLink>
                <div className={styles.headerText}>تفکر سیستمی</div>
            </div>

            <div dir="rtl" className={styles.pictureFrame}>
                <img className={styles.picture} src={IntroPic} alt="intro-pic"></img>
                <div className={styles.pictureCaptionFrame}>
                    <div className={styles.pictureCaptionSubtitle}>هنر دیدن اتصالات پنهان</div>
                    <div className={styles.pictureCaptionAuthor}>مجید زنجیران</div>
                </div>
            </div>
            {/*<MainFooter/>*/}

        </div>
    </div>
  );
};
