import { memo } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

const SearchBar = memo(function SearchBar({
  value,
  onChange,
  placeholder = "Search for products...",
  className,
  autoFocus = false,
}: SearchBarProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-100 border border-gray-200 text-gray-900 pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all"
        autoFocus={autoFocus}
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  );
});

export default SearchBar;
