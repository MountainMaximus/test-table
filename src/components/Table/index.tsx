import React from "react";
import styles from "./Table.module.scss";
import { useSelector } from "react-redux";
import { getAllFolderData, getSortParams } from "../../redux/filter/selectors";
import { Titles } from "../../redux/filter/types";
import { TableData } from "./TableData";
import { setSortParams } from "../../redux/filter/slice";
import { useAppDispatch } from "../../redux/store";
export const Table: React.FC = () => {
  const { folderData, sortParams } = useSelector(getAllFolderData);
  const dispatch = useAppDispatch();

  const tableRef = React.useRef<HTMLTableElement>(null);
  const [position, setPosition] = React.useState(0);
  const listenToScroll = () => {
    const position =
      (document.body.scrollTop || document.documentElement.scrollTop) -
      (tableRef.current?.offsetTop || 0) +
      60;

    setPosition(position);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    listenToScroll();
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, [tableRef]);

  const onClikCollumn = (selectedColumn: number) => {
    console.log("ss", selectedColumn);

    if (sortParams.column === selectedColumn)
      dispatch(
        setSortParams({
          column: selectedColumn,
          direction: !sortParams.direction,
        })
      );
    else dispatch(setSortParams({ column: selectedColumn, direction: true }));
  };
  return (
    <table ref={tableRef} className={styles.table}>
      <thead>
        <tr>
          {Object.entries(Titles).map(([key, val], i) => (
            <th
              onClick={() => onClikCollumn(i)}
              key={key}
              className={`${position > 0 ? styles.fixed : ""}`}
            >
              {val + "   "}
              {i === sortParams.column && sortParams.direction && <>&#9660;</>}
              {i === sortParams.column && !sortParams.direction && <>&#9650;</>}
              <div style={{ top: position }}>{val}</div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <TableData folderData={folderData} sortParams={sortParams} />
      </tbody>
    </table>
  );
};
