import { IFile } from "../data/types";

export enum Titles {
  NAME = "File Name",
  SIZE = "Size",
  MODIFICATION = "Last Modification",
}

export interface IFilterSlice {
  folderData?: IFile[];
  sortParams: {
    column: number;
    direction: boolean;
  };
}
