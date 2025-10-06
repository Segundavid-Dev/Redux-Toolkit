import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <span>
          <h1>
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600 bg-clip-text font-bold text-transparent text-2xl">
              My Tasks
            </span>
            <span>✨</span>
          </h1>
        </span>
        <p className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
          <FontAwesomeIcon icon={faTag} />
          <span>Manage Categories</span>
        </p>
      </div>
    </header>
  );
}
