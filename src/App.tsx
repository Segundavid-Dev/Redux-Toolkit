import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/CountSlice";
import type { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count.value);
  return (
    <div>
      <h1>Redux Toolkit + TypeScript</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
