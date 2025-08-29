import { useMemo } from 'react';
import { useGetAllItemsQuery } from '../api/ItemApi';

export const useItems = (page: number, limit: number = 6, searchTerm: string = '') => {
  const safePage = Math.max(1, page);
  const safeLimit = Math.max(1, Math.min(limit, 50));
  const safeSearchTerm = searchTerm.trim();

  const { data: allItems = [], isLoading, isError, error } = useGetAllItemsQuery(safeSearchTerm);

  const totalCount = allItems.length;

  const totalPages = Math.max(1, Math.ceil(totalCount / safeLimit));

  const currentPage = Math.min(safePage, totalPages);

  const items = useMemo(() => {
    const start = (currentPage - 1) * safeLimit;
    const end = start + safeLimit;
    return allItems.slice(start, end);
  }, [allItems, currentPage, safeLimit]);

  return {
    items,
    totalPages,
    isLoading,
    isError,
    error,
    totalCount,
    currentPage,
  };
};
