import React from "react";
import styles from "./MainFooter.module.scss";
import {NavLink} from "react-router-dom";
import ProfileIcon from "./profile.svg"
import HomeIcon from "./home3.svg"
import BookmarkIcon from "./bookmark.svg"

export type MainFooterProps = {
    className?: string;
};

export const MainFooter: React.FC<MainFooterProps> = () => {
    return (
        <div dir="rtl" className={styles.footer}>
            <div dir="rtl" className={styles.footerIcon}>
                <NavLink to="/profile">
                    <img src={ProfileIcon} alt="profile-img"/>
                </NavLink>
            </div>
            <div dir="rtl" className={styles.footerIcon}>
                <NavLink to="/">
                    <img src={HomeIcon} alt="home-img"/>
                </NavLink>
            </div>
            <div dir="rtl" className={styles.footerIcon}>
                <NavLink to="/bookmarks">
                    <img src={BookmarkIcon} alt="bookmark-img"/>
                </NavLink>
            </div>
        </div>
    );
};
