import React from "react";
import styles from "./Profile.module.scss";
import clsx from "clsx";
import {MainFooter} from "../../MainFooter/MainFooter.tsx"

export type ProfileProps = {
  className?: string;
};
export const Profile: React.FC<ProfileProps> = ({ className }) => {

  return (
    <div className={clsx(styles.Profile, className)}>
        <div className={styles.container}>
            <div dir="rtl" className={styles.header}>
                <div className={styles.headerText}>پروفایل</div>
            </div>

            <MainFooter/>

        </div>
    </div>
  );
};
