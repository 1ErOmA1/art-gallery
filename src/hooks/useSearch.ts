import debounce from 'lodash.debounce';
import { useCallback, useMemo, useState } from 'react';

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        setSearchTerm(term);
      }, 300),
    [],
  );

  const handleSearch = useCallback(
    (term: string) => {
      debouncedSearch(term);
    },
    [debouncedSearch],
  );

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    searchTerm,
    handleSearch,
    clearSearch,
  };
}
