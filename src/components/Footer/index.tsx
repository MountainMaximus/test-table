import React from "react";
import { useSelector } from "react-redux";
import { getData } from "../../redux/data/selectors";

import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const { report } = useSelector(getData);

  return (
    <footer className={styles.root}>
      Общее число папок в дереве: {report.directories}, число файлов:{" "}
      {report.files}
    </footer>
  );
};
