import styles from './EmptyState.module.scss';

function Empty() {
  return (
    <div className={styles.noResults}>
      <h2>Ничего не найдено</h2>
      <p>Попробуйте изменить запрос.</p>
    </div>
  );
}
export default Empty;
