import { createSlice } from "@reduxjs/toolkit";

type todoType = {
  id: number;
  task: string;
};

type initialStateTypes = {
  todos: todoType[];
};

const initialState: initialStateTypes = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload.task.trim() === "") return;
      console.log(action);
      state.todos = [...state.todos, action.payload];
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTask: (state, action) => {
      console.log(action.payload);
      state.todos = [...state.todos];
    },
  },
});

export const { addTask, removeTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
