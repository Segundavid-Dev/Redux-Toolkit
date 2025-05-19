import Filter from "./components/Filter";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto">
        <div className="bg-white w-[50vw] mx-auto p-4 rounded-lg shadow-md">
          <Header />
          <Input />
          <Filter />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
