import { createSlice } from "@reduxjs/toolkit";

export type initialStateType = {
  value: number;
};

const initialState: initialStateType = {
  value: 1,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
