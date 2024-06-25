import React from "react";
import styles from "./SuggestUs.module.scss";
import clsx from "clsx";
import {MainFooter} from "../../MainFooter/MainFooter.tsx"
import BackIcon from "./BackBtn2.png"

export type SuggestUsProps = {
  className?: string;
};
export const SuggestUs: React.FC<SuggestUsProps> = ({ className }) => {

  return (
    <div className={clsx(styles.SuggestUs, className)}>
        <div className={styles.container}>
            <div dir="rtl" className={styles.header}>
                <img className={styles.headerBackBtn} src={BackIcon} alt="back-btn"></img>
                <div className={styles.headerText}>پیشنهاد به خوشه</div>
            </div>

            <MainFooter/>

        </div>
    </div>
  );
};
