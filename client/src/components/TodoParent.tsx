import { useState } from "react";
import Input from "./Input";
import Filter from "./Filter";
import TodoList from "./TodoList";

export default function TodoParent() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Input />
      <Filter search={search} setSearch={setSearch} />
      <TodoList search={search} setSearch={setSearch} />
    </div>
  );
}
