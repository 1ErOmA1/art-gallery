import type { ReactNode } from 'react';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>{children}</div>
    </main>
  );
};

export default Layout;
