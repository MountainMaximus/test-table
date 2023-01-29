import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import data from "./data/slice";
import filter from "./filter/slice";

export const store = configureStore({
  reducer: {
    data,
    filter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
