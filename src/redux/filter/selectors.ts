import { RootState } from "../store";

export const getAllFolderData = (state: RootState) => state.filter;
export const getSortParams = (state: RootState) => state.filter.sortParams;
