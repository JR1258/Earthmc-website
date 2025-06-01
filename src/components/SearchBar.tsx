
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative flex-1 max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
      <Input
        type="text"
        placeholder="Search residents, towns, nations..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10 bg-slate-800/50 border-emerald-500/30 text-white placeholder:text-slate-400 focus:border-emerald-400"
      />
    </div>
  );
};

export default SearchBar;
