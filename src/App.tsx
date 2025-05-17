import "./App.css";
import AddTask from "./components/AddTask";
import InputTask from "./components/InputTask";

function App() {
  return (
    <div>
      <h1>Redux Toolkit + TypeScript (Todo App)</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InputTask />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
