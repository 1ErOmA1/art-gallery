import { useCallback, useMemo } from 'react';

import { useGetAuthorsQuery, useGetLocationsQuery } from '../../api/ItemApi';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import Empty from '../../components/states/Empty/Empty';
import Error from '../../components/states/Error/Error';

import Loading from '../../components/states/Loading/Loading';
import { useItems } from '../../hooks/useItems';
import { usePagination } from '../../hooks/usePagination';
import { useSearch } from '../../hooks/useSearch';

import { useTheme } from '../../hooks/useTheme';

import styles from './Home.module.scss';

function Home() {
  const { searchTerm, handleSearch } = useSearch();
  const { currentPage, handlePageChange, resetPagination } = usePagination();
  const { theme } = useTheme();

  const { items, totalPages, isLoading, isError } = useItems(
    currentPage,
    6,
    searchTerm,
  );
  const { data: authors = [] } = useGetAuthorsQuery();
  const { data: locations = [] } = useGetLocationsQuery();

  const handleSearchWithReset = useCallback(
    (term: string) => {
      handleSearch(term);
      resetPagination();
    },
    [handleSearch, resetPagination],
  );

  const memoAuthors = useMemo(() => authors, [authors]);
  const memoLocations = useMemo(() => locations, [locations]);

  const artistCards = useMemo(() => {
    return items.map(item => (
      <ArtistCard
        key={item.id}
        artwork={item}
        authors={memoAuthors}
        locations={memoLocations}
      />
    ));
  }, [items, memoAuthors, memoLocations]);

  if (isLoading)
    return <Loading />;
  if (isError)
    return <Error />;

  return (
    <>
      <SearchBar theme={theme} onSearch={handleSearchWithReset} />
      {items.length === 0 && <Empty />}

      {items.length > 0 && (
        <>
          <div className={styles.artistsGrid}>{artistCards}</div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </>
  );
}

export default Home;
