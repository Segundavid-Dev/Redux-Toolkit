import TodoParent from "./components/TodoParent";
import EditModal from "./components/EditModal";
import ModalProvider from "./context/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <div className="flex items-center justify-center min-h-screen my-10">
        <div className="container mx-auto">
          <div className="bg-white w-[50vw] mx-auto p-8 rounded-lg shadow-md max-sm:w-[90vw]">
            <TodoParent />
          </div>
        </div>
        <EditModal />
      </div>
    </ModalProvider>
  );
}

export default App;
