import React from "react";
import styles from "./App.module.scss";
import clsx from "clsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "../pages/Home/Home.tsx"
import {Profile} from "../pages/Profile/Profile.tsx";
import {Bookmarks} from "../pages/Bookmarks/Bookmarks.tsx";

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = ({ className }) => {

  return (
      <div className={clsx(styles.App, className)}>
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/bookmarks" element={<Bookmarks/>}/>
              </Routes>
          </Router>
      </div>
  );
};
