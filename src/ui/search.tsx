import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center gap-2 border-b border-gray-500 w-40">
      <SearchIcon size={15} strokeWidth={3} />
      <input
        type="text"
        placeholder="Search"
        className=" outline-none font-normal text-sm w-32 "
      />
    </div>
  );
};

export default Search;
