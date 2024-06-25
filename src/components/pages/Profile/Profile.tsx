import React from "react";
import styles from "./Profile.module.scss";
import clsx from "clsx";

export type ProfileProps = {
  className?: string;
};
export const Profile: React.FC<ProfileProps> = ({ className }) => {

  return (
    <div className={clsx(styles.Profile, className)}>
        <div> سلام سلام سلام</div>
    </div>
  );
};
