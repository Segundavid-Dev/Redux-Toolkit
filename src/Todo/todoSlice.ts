import { createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
  todos: string[];
};

const initialState: initialStateTypes = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload === "") return;
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
