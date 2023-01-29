import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../data/types";

import { IFilterSlice } from "./types";

const initialState: IFilterSlice = {
  folderData: undefined,
  sortParams: {
    column: 1,
    direction: true,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFolderData(state, action: PayloadAction<IFile[] | undefined>) {
      state.folderData = action.payload;
    },
    setSortParams(
      state,
      action: PayloadAction<{ column: number; direction: boolean }>
    ) {
      state.sortParams = action.payload;
    },
  },
});
export const { setFolderData, setSortParams } = filterSlice.actions;
export default filterSlice.reducer;
