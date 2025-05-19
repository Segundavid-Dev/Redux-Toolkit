export default function FilterSearch() {
  return (
    <div>
      <h2 className="bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600 bg-clip-text font-bold text-transparent text-[20px] pb-2">
        Filter & Sort
      </h2>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search tasks..."
        className="w-full p-3 border-gray-400 rounded-lg border-1 focus:outline-violet-500 text-gray-500"
      />
    </div>
  );
}
