import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { removeTask } from "@/Todo/todoSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <ul className="">
      {todos.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between mb-2 text-gray-500 px-5 py-3 border mt-5 rounded-lg border-gray-500"
        >
          {item.task}
          <FontAwesomeIcon
            icon={faTrash}
            className=" cursor-pointer text-[14px]"
            onClick={() => dispatch(removeTask(item.id))}
          />
        </li>
      ))}
    </ul>
  );
}
