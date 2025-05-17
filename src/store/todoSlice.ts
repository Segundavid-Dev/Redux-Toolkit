import { createSlice } from "@reduxjs/toolkit";

// create the type of the initialState
type initialStateType = {
  tasks: string[];
};

// create initialState and assign it to it type
const initialState: initialStateType = {
  tasks: [],
};

// createReducer using the createSlice from redux-toolkit
// this creates an object with each reducer functions available inside for export
const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

// todoReducer is actually the entire slice object not the reducer function
// export only the reducer function
export default todoReducer.reducer;

export const { addTask } = todoReducer.actions;
