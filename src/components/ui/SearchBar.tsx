import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search stocks...',
  initialValue = '',
  className = '',
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-10 py-2 bg-gray-800 border border-gray-700 rounded-md 
                 text-gray-200 placeholder-gray-500 focus:outline-none 
                 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 
                 bg-sky-600 text-white text-xs rounded hover:bg-sky-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;