import styles from './Pagination.module.scss';
import arrowLeft from '../../assets/icons/arrow/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow/arrow-right.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  const safeTotalPages = Math.max(1, totalPages);

  if (safeTotalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;

    let startPage = Math.max(1, safeCurrentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(safeTotalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('ellipsis-start');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = getPageNumbers();

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.paginationButton} ${styles.prevNextButton}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <img src={arrowLeft} alt="Стрелка влево" className={styles.arrowLeft} />
      </button>

      {pageNumbers.map((page, index) => {
        if (typeof page === 'string') {
          return (
            <span key={index} className={styles.ellipsis}>
              ...
            </span>
          );
        }

        return (
          <button
            key={index}
            className={`${styles.paginationButton} ${page === currentPage ? styles.active : ''}`}
            onClick={() => handlePageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        className={`${styles.paginationButton} ${styles.prevNextButton}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <img src={arrowRight} alt="Стрелка вправо" className={styles.arrowRight} />
      </button>
    </div>
  );
};

export default Pagination;
