import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectPriorities() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-1 border-gray-300 focus:ring-gray-300">
        <SelectValue placeholder="All priorities" />
      </SelectTrigger>
      <SelectContent className="border-1 border-gray-300 bg-white">
        <SelectItem value="light">Low</SelectItem>
        <SelectItem value="dark">Medium</SelectItem>
        <SelectItem value="system">High</SelectItem>
      </SelectContent>
    </Select>
  );
}

function SelectCategories() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-1 border-gray-300 focus:ring-gray-300">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent className="border-1 border-gray-300 bg-white">
        <SelectItem value="light">Work</SelectItem>
        <SelectItem value="dark">Personal</SelectItem>
        <SelectItem value="system">Chores</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default function FilterSelect() {
  return (
    <div className="flex items-center gap-10 mt-4">
      <SelectPriorities />
      <SelectCategories />
    </div>
  );
}
