
"use client";
import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (d: string) => void;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="flex gap-2 w-full max-w-xl">
      <input
        className="flex-1 border rounded px-3 py-2"
        placeholder="Enter domain e.g. example.com"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => onSearch(value.trim().toLowerCase())}
      >
        Analyze
      </button>
    </div>
  );
}
