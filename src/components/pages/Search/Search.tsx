import React from "react";
import styles from "./Search.module.scss";
import clsx from "clsx";
import {MainFooter} from "../../MainFooter/MainFooter.tsx"

export type SearchProps = {
  className?: string;
};
export const Search: React.FC<SearchProps> = ({ className }) => {

  return (
    <div className={clsx(styles.Search, className)}>
        <div className={styles.container}>
            <div dir="rtl" className={styles.header}>
                <div className={styles.headerText}>جستجو</div>
            </div>

            <MainFooter/>

        </div>
    </div>
  );
};
