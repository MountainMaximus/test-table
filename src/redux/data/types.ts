export interface IDataSlice {
  files: IFolder;
  report: Ireport;
  status: Status;
}
export type TypeData = "directory" | "file" | "report";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IFile {
  type: TypeData;
  name: string;
  size: string;
  time: string;
}

export interface IFolder extends IFile {
  folders?: IFolder[];
  files?: IFile[];
}
export interface Ireport {
  type: TypeData;
  directories: number;
  files: number;
}

export interface IFetchFolder {
  type: TypeData;
  name: string;
  size?: string;
  time?: string;
  contents?: IFetchFolder[];
}
export type IFetchData = [IFetchFolder, Ireport];
