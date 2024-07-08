import React from "react";
import styles from "./LessonIntro.module.scss";
import clsx from "clsx";
import BackIcon from "./BackBtn.png"
import IntroPic from "./IntroPic.png"
import ShareIcon from "./share.svg"
import BookmarkIcon from "./bookmark.svg"
import AbstractIcon from "./abstract.svg"
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

            <div dir="rtl" className={styles.ctaFrame}>
                <div className={styles.mainCta}>ادامه مطالعه</div>
                <img className={styles.otherCta} src={AbstractIcon} alt="abstract-icon"/>
                <img className={styles.otherCta} src={BookmarkIcon} alt="bookmark-icon"/>
                <img className={styles.otherCta} src={ShareIcon} alt="share-icon"/>
            </div>

            <div dir="rtl" className={styles.progressFrame}>
                <div className={styles.progressLog}>20% مطالعه شده</div>
                <div className={styles.timeNeeded}>مدت تقریبی مطالعه: 8 دقیقه</div>
            </div>

        </div>
    </div>
  );
};
