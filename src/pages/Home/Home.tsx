import SearchBar from '../../components/SearchBar/SearchBar';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/states/Loading/Loading';
import Error from '../../components/states/Error/Error';
import Empty from '../../components/states/Empty/Empty';

import { usePagination } from '../../hooks/usePagination';
import { useSearch } from '../../hooks/useSearch';
import { useItems } from '../../hooks/useItems';
import { useTheme } from '../../hooks/useTheme';

import styles from './Home.module.scss';

const Home = () => {
  const { searchTerm, handleSearch } = useSearch();
  const { currentPage, handlePageChange, resetPagination } = usePagination();
  const { theme } = useTheme();

  const { items, totalPages, isLoading, isError } = useItems(currentPage, 6, searchTerm);

  const handleSearchWithReset = (term: string) => {
    handleSearch(term);
    resetPagination();
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (items.length === 0) return <Empty />;

  return (
    <>
      <SearchBar theme={theme} onSearch={handleSearchWithReset} />
      {items.length === 0 && (
        <div className={styles.noResults}>
          <h2>Ничего не найдено</h2>
          <p>Попробуйте изменить запрос.</p>
        </div>
      )}

      {items.length > 0 && (
        <>
          <div className={styles.artistsGrid}>
            {items.map((item) => (
              <ArtistCard key={item.id} artwork={item} />
            ))}
          </div>

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
};

export default Home;
