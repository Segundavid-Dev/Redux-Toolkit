import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/todoSlice";
import type { RootState } from "../store/store";
import type { AppDispatch } from "../store/store";

type DispatchProps = {
  dispatch: AppDispatch;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputTask() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todo.tasks);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <AddTask todo={todo} dispatch={dispatch} setTodo={setTodo} />
      </div>
      <div>
        <ul>
          {todos.map((todo, id) => (
            <li key={id} style={{ paddingBottom: "1rem", cursor: "pointer" }}>
              <span style={{ marginRight: "1rem" }}>{todo}</span>
              <span>❌</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function AddTask({ dispatch, todo, setTodo }: DispatchProps) {
  function clearInput() {
    setTodo("");
  }
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addTask(todo));
          clearInput();
        }}
      >
        Add to Task
      </button>
    </div>
  );
}
