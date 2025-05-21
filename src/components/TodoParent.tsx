import { useState } from "react";
import Input from "./Input";
import Filter from "./Filter";
import TodoList from "./TodoList";

export default function TodoParent() {
  return (
    <div>
      <Input />
      <Filter />
      <TodoList />
    </div>
  );
}
