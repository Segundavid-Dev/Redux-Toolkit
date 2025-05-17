import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/todoSlice";
import type { RootState } from "../store/store";
import type { AppDispatch } from "../store/store";

type DispatchProps = {
  dispatch: AppDispatch;
  todo: string;
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
        <AddTask todo={todo} dispatch={dispatch} />
      </div>
      <div>
        <ul>
          {todos.map((todo, id) => (
            <li key={id}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function AddTask({ dispatch, todo }: DispatchProps) {
  return (
    <div>
      <button onClick={() => dispatch(addTask(todo))}>Add to Task</button>
    </div>
  );
}
