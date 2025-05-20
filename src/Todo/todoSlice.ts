import { createSlice } from "@reduxjs/toolkit";

type todoType = {
  id: number;
  task: string;
};

type initialStateTypes = {
  todos: todoType[];
  selectedTask?: todoType;
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
      const { id, task } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, task } : todo
      );
    },
    selectTask: (state, action) => {
      state.selectedTask = state.todos.find(
        (todo) => todo.id === action.payload
      );
    },
  },
});

export const { addTask, removeTask, editTask, selectTask } = todoSlice.actions;
export default todoSlice.reducer;
