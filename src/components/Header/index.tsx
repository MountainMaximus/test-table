import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header: React.FC<{
  setShowSideBar: () => void;
  showSideBar: boolean;
}> = ({ setShowSideBar, showSideBar }) => {
  return (
    <header className={styles.root}>
      <button
        className={`${styles.burger} ${showSideBar ? styles.clouse : ""}`}
        type="button"
        onClick={() => setShowSideBar()}
      >
        <span>Открыть навигацию</span>
      </button>
      <Link to="/" className={styles.title}>
        Таблица файлов
      </Link>
    </header>
  );
};
