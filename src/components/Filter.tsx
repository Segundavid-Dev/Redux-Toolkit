import FilterSearch from "./FilterSearch";
import type { searchType } from "@/types";

export default function Filter({ search, setSearch }: searchType) {
  return (
    <div className="mt-5 p-5 rounded-lg border border-gray-400">
      <FilterSearch search={search} setSearch={setSearch} />
    </div>
  );
}
