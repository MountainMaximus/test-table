import React from "react";
import { IFolder } from "../../redux/data/types";
import { setFolderData } from "../../redux/filter/slice";
import { useAppDispatch } from "../../redux/store";

import styles from "./Tree.module.scss";

export const Node: React.FC<{ node: IFolder }> = ({ node }) => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const onClickNode = React.useCallback(() => {
    setOpen((prev) => !prev);
    dispatch(setFolderData(node.files));
  }, []);
  return (
    <div className={styles.root}>
      <div
        onClick={onClickNode}
        className={`${styles.node} ${node.folders ? styles.havechaild : ""}`}
      >
        {node.name}
      </div>

      {open && node.folders && (
        <ul>
          {node.folders.map((val) => (
            <li key={val.name + val.type}>
              <Node node={val} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
