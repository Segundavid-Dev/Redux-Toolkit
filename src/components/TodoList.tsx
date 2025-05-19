import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  return (
    <ul className="">
      {todos.map((item, id) => (
        <li
          key={id}
          className="flex items-center justify-between mb-2 text-gray-500 px-5 py-3 border mt-5 rounded-lg border-gray-500"
        >
          {item}
          <FontAwesomeIcon
            icon={faTrash}
            className=" cursor-pointer text-[14px]"
          />
        </li>
      ))}
    </ul>
  );
}

//  <li className="flex flex-col">
//       <span>dsa</span>
//       <span className="text-[14px] text-gray-500">
//         Task details: Complete this task efficiently while maintianing quality
//         standards
//       </span>
//       <small>
//         <span className="bg-blue-300 px-2 rounded-full text-blue-600 font-bold">
//           Work
//         </span>
//       </small>
