import logoDark from '../../assets/icons/logo/logo-dark.svg';
import logoLight from '../../assets/icons/logo/logo-light.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.scss';

interface HeaderProps {
  theme: string
  onThemeToggle: () => void
}

function Header({ theme, onThemeToggle }: HeaderProps) {
  const logo = theme === 'light' ? logoLight : logoDark;
  const logoAlt
    = theme === 'light'
      ? 'Логотип Art Gallery - светлая версия'
      : 'Логотип Art Gallery - темная версия';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt={logoAlt}
            className={styles.logoImage}
            title="Art Gallery - Художественная галерея"
          />
        </div>

        <div className={styles.controls}>
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>
      </div>
    </header>
  );
}

export default Header;
