import { createSlice } from "@reduxjs/toolkit";
import fetchData from "./asyncAction";

import { IDataSlice, IFetchFolder, IFile, IFolder, Status } from "./types";

const initialState: IDataSlice = {
  files: {
    type: "directory",
    name: "",
    size: "",
    time: "",
  },
  report: { type: "report", directories: 0, files: 0 },
  status: Status.LOADING,
};

const transformationData: (data: IFetchFolder) => IFolder = (data) => {
  if (data.type === "file")
    return {
      type: "file",
      name: data.name,
      size: data.size || "0",
      time: data.time || "",
    };
  const folders = [] as unknown as IFolder[],
    files = [] as unknown as IFile[];
  data.contents?.forEach((val) => {
    const transformedFile = transformationData(val);
    if (transformedFile.type === "file") {
      files.push(transformedFile);
    } else {
      folders.push(transformedFile);
    }
  });
  return {
    type: "directory",
    name: data.name,
    size: data.size || "0",
    time: data.time || "",
    folders: folders.length ? folders : undefined,
    files: files.length ? files : undefined,
  };
};
const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = Status.LOADING;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      const files = transformationData(action.payload[0]);
      state.files = files;
      state.report.directories = action.payload[1].directories;
      state.report.files = action.payload[1].files;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.files = initialState.files;
      state.report = initialState.report;
      state.status = Status.ERROR;
    });
  },
});

export default DataSlice.reducer;
