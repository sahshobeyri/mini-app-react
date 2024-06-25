import React from "react";
import styles from "./Profile.module.scss";
import clsx from "clsx";
import {NavLink} from "react-router-dom";
import profileIcon from "../Home/FigmaProfile.png";

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

            <div dir="rtl" className={styles.footer}>
                <div dir="rtl" className={styles.title}>اینجا فوتر است</div>
                <div dir="rtl" className={styles.footerProfile}>
                    <NavLink to="/">
                        <img src={profileIcon} alt="profile-img"/>
                    </NavLink>
                </div>
            </div>

        </div>
    </div>
  );
};
