import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFetchData } from "./types";

const fetchData = createAsyncThunk("items/fetchData", async () => {
  const { data } = await axios.get<IFetchData>("example.json");
  return data;
});

export default fetchData;
