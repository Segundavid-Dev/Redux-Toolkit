import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { removeTask, selectTask } from "@/Todo/todoSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import type { searchType } from "@/types";

export default function TodoList({ search }: searchType) {
  const modalContext = useContext(ModalContext);
  // destructure out state values
  const { setModal } = modalContext;
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  // returns true for all todo is search is empty
  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase())
  );

  function handleShowModal() {
    setModal(true);
  }

  return (
    <ul className="">
      {filteredTodos.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between mb-2 text-gray-500 px-5 py-3 border mt-5 rounded-lg border-gray-500"
        >
          {item.task}
          <span>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className=" cursor-pointer text-[14px] mr-3"
              onClick={() => {
                handleShowModal();
                dispatch(selectTask(item.id));
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className=" cursor-pointer text-[14px]"
              onClick={() => dispatch(removeTask(item.id))}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
