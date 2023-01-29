import React from "react";

import { useSelector } from "react-redux";
import { IFile } from "../../redux/data/types";
import { getAllFolderData } from "../../redux/filter/selectors";
import { IFilterSlice } from "../../redux/filter/types";
export const TableData: React.FC<IFilterSlice> = React.memo(
  ({ folderData, sortParams }) => {
    /**Функция сортировки */
    const comparisonCondition = (a: IFile, b: IFile) => {
      const { direction, column } = sortParams;
      const numberdirection = +direction * 2 - 1;
      switch (column) {
        case 0:
          return a.name > b.name ? numberdirection : -numberdirection;
        case 1:
          return a.size > b.size ? numberdirection : -numberdirection;
        case 2:
          return a.time > b.time ? numberdirection : -numberdirection;
        default:
          return 0;
      }
    };

    return (
      <>
        {folderData ? (
          [...folderData].sort(comparisonCondition).map((val) => (
            <tr key={val.name}>
              <td>{val.name}</td>
              <td>{val.size}</td>
              <td>{val.time}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Папка пуста</td>
          </tr>
        )}
      </>
    );
  }
);
