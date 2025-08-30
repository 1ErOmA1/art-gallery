import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}>
        <span className={styles.loadingSpinner}></span>
        Загрузка произведений искусства...
      </div>
    </div>
  );
}
export default Loading;
