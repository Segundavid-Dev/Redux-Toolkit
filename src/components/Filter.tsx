import FilterSearch from "./FilterSearch";
import FilterSelect from "./FilterSelect";

export default function Filter() {
  return (
    <div className="mt-5 p-5 rounded-lg border border-gray-400">
      <FilterSearch />
      <FilterSelect />
    </div>
  );
}
