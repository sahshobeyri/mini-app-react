import React from "react";
import styles from "./MainFooter.module.scss";
import {NavLink} from "react-router-dom";
import ProfileIcon from "./FigmaProfile.png"
import HomeIcon from "./explore.png"
import BookmarkIcon from "./bookmark.png"

export type MainFooterProps = {
    className?: string;
};

export const MainFooter: React.FC<MainFooterProps> = () => {
    return (
        <div dir="rtl" className={styles.footer}>
            <div dir="rtl" className={styles.footerProfile}>
                <NavLink to="/profile">
                    <img src={ProfileIcon} alt="profile-img"/>
                </NavLink>
            </div>
            <div dir="rtl" className={styles.footerHome}>
                <NavLink to="/">
                    <img src={HomeIcon} alt="home-img"/>
                </NavLink>
            </div>
            <div dir="rtl" className={styles.footerHome}>
                <NavLink to="/">
                    <img src={BookmarkIcon} alt="bookmark-img"/>
                </NavLink>
            </div>
        </div>
    );
};
