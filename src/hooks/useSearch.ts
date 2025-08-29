import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setSearchTerm(term);
    }, 300),
    [],
  );

  const handleSearch = (term: string) => {
    debouncedSearch(term);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return {
    searchTerm,
    handleSearch,
    clearSearch,
  };
};
