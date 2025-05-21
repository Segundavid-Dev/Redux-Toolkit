import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
export default function FilterSearch() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [search, setSearch] = useState("");

  // UI level filtering
  const filteredTodos = todos.filter((todo) =>
    todo.task.toLocaleLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600 bg-clip-text font-bold text-transparent text-[20px] pb-2">
        Filter & Sort
      </h2>
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="search tasks..."
        className="w-full p-3 border-gray-400 rounded-lg border-1 focus:outline-violet-500 text-gray-500"
      />
    </div>
  );
}
