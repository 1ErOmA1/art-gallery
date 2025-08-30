import { useMemo } from 'react';
import { useGetPaintingsQuery } from '../api/ItemApi';

export function useItems(
  page: number,
  limit: number = 6,
  searchTerm: string = '',
) {
  const { data, isLoading, isError, error } = useGetPaintingsQuery({
    q: searchTerm,
    _page: page,
    _limit: limit,
  });

  return useMemo(() => {
    const items = data?.data ?? [];
    const totalCount = data?.meta.totalCount ?? 0;
    const totalPages = Math.max(1, Math.ceil(totalCount / limit));

    return {
      items,
      totalPages,
      isLoading,
      isError,
      error,
      totalCount,
      currentPage: page,
    };
  }, [data, isLoading, isError, error, limit, page]);
}
