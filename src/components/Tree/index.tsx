import React from "react";
import { useSelector } from "react-redux";
import { getData } from "../../redux/data/selectors";

import styles from "./Tree.module.scss";
import { Node } from "./Node";
import { Status } from "../../redux/data/types";
import { Preloader } from "../../layout/Preloader";

export const Tree: React.FC = () => {
  const { files, status } = useSelector(getData);

  return (
    <div className={styles.root}>
      {status === Status.SUCCESS && <Node node={files} />}
      {status === Status.LOADING && <Preloader />}
      {status === Status.ERROR && <div>Произошла ошибка загрузки данных</div>}
    </div>
  );
};
