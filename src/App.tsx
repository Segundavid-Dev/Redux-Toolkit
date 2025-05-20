import Filter from "./components/Filter";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import EditModal from "./components/EditModal";
import ModalProvider from "./context/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <div className="flex items-center justify-center min-h-screen my-10">
        <div className="container mx-auto">
          <div className="bg-white w-[50vw] mx-auto p-8 rounded-lg shadow-md">
            <Header />
            <Input />
            <Filter />
            <TodoList />
          </div>
        </div>
        <EditModal />
      </div>
    </ModalProvider>
  );
}

export default App;
