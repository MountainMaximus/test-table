import React from "react";
import { Tree } from "../Tree";

import styles from "./SideBar.module.scss";

export const SideBar: React.FC<{ showSideBar: boolean }> = ({
  showSideBar,
}) => {
  return (
    <aside className={`${styles.root} ${showSideBar ? styles.show : ""}`}>
      <Tree />
    </aside>
  );
};
