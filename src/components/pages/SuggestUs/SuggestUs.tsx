import React from "react";
import styles from "./SuggestUs.module.scss";
import clsx from "clsx";
import {MainFooter} from "../../MainFooter/MainFooter.tsx"
import BackIcon from "./BackBtn.png"
import {NavLink} from "react-router-dom";

export type SuggestUsProps = {
  className?: string;
};
export const SuggestUs: React.FC<SuggestUsProps> = ({ className }) => {

  return (
    <div className={clsx(styles.SuggestUs, className)}>
        <div className={styles.container}>
            <div dir="rtl" className={styles.header}>
                <NavLink to="/">
                    <img className={styles.headerBackBtn} src={BackIcon} alt="back-btn"></img>
                </NavLink>
                <div className={styles.headerText}>پیشنهاد به خوشه</div>
            </div>

            <div dir="rtl" className={styles.mainFrame}>
                <textarea
                    className={styles.textInput}
                    placeholder="چه موضوعات یا خلاصه کتاب‌ها یا مقالاتی رو دوست داری که توی خوشه داشته باشی؟"/>
                <div className={styles.sendBtn}>بفرست</div>
            </div>

            <MainFooter/>

        </div>
    </div>
  );
};
