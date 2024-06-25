import React from "react";
import styles from "./Reader.module.scss";
import clsx from "clsx";
import {NavLink} from "react-router-dom";
import ShareIcon from "./share.svg"
import LikeIcon from "./like.svg";
import CloseIcon from "./close.svg";

export type ReaderProps = {
    className?: string;
};
export const Reader: React.FC<ReaderProps> = ({className}) => {

    return (
        <div className={clsx(styles.Reader, className)}>
            <div className={styles.container}>
                {/*<div dir="rtl" className={styles.header}>*/}
                {/*    <NavLink to="/">*/}
                {/*        <img className={styles.headerBackBtn} src={BackIcon} alt="back-btn"></img>*/}
                {/*    </NavLink>*/}
                {/*    <div className={styles.headerText}>تفکر سیستمی</div>*/}
                {/*</div>*/}

                <div dir="rtl" className={styles.footer}>
                    <div dir="rtl" className={styles.footerIcon}>
                        <img src={ShareIcon} alt="share-img"/>
                    </div>
                    <div dir="rtl" className={styles.footerIcon}>
                        <img src={LikeIcon} alt="like-img"/>
                    </div>
                    <div dir="rtl" className={styles.footerIcon}>
                        <NavLink to="/lessonIntro">
                            <img src={CloseIcon} alt="close-img"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
