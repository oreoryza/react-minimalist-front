import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./async/fetchData";

const store = configureStore({
  reducer: {
    fetch: fetchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;