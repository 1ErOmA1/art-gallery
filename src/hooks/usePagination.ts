import { useState } from 'react';

export function usePagination(initialPage: number = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page >= 1) {
      setCurrentPage(page);
    }
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  return {
    currentPage,
    handlePageChange,
    resetPagination,
  };
}
