import styles from './Error.module.scss';

function Error() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.error}>
        <h2>Ошибка загрузки</h2>
        <p>Не удалось загрузить данные. Попробуйте позже.</p>
      </div>
    </div>
  );
}
export default Error;
