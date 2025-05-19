import Header from "./Header";
import Input from "./Input";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto">
        <div className="bg-white w-[50vw] mx-auto p-4 rounded-lg shadow-md">
          <Header />
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
