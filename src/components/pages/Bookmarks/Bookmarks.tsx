import React from "react";
import styles from "./Bookmarks.module.scss";
import clsx from "clsx";
import {MainFooter} from "../../MainFooter/MainFooter.tsx"

export type BookmarksProps = {
  className?: string;
};
export const Bookmarks: React.FC<BookmarksProps> = ({ className }) => {

  return (
    <div className={clsx(styles.Bookmarks, className)}>
        <div className={styles.container}>
            <div dir="rtl" className={styles.header}>
                <div className={styles.headerText}>کتابخانه</div>
            </div>

            <MainFooter/>

        </div>
    </div>
  );
};
