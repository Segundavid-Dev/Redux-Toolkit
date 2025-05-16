import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./CountSlice";

// create the store

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
