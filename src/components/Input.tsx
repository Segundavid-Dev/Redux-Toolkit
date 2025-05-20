import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/Todo/todoSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Input() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  function handleClearInput() {
    setTodo("");
  }

  return (
    <div>
      <div className="mt-10 relative">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="what needs to be done?"
          className="w-full p-4 border-1 border-gray-400 rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 text-gray-500"
        />
        <button
          className="px-4 py-3 rounded-lg text-white bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600  cursor-pointer text-[14px] absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => {
            dispatch(addTask({ id: Date.now(), task: todo }));
            handleClearInput();
          }}
        >
          <span className="mr-2">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span>Add task</span>
        </button>
      </div>
    </div>
  );
}
