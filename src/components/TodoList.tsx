export default function TodoList() {
  return (
    <ul className="px-5 py-3 border mt-5 rounded-lg border-gray-500">
      <li className="flex flex-col">
        <span>dsa</span>
        <span className="text-[14px] text-gray-500">
          Task details: Complete this task efficiently while maintianing quality
          standards
        </span>
        <small>
          <span className="bg-blue-300 px-2 rounded-full text-blue-600 font-bold">
            Work
          </span>
        </small>
      </li>
    </ul>
  );
}
