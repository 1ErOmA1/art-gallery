import MoonIcon from '../../assets/icons/moon-icon.svg';
import SunIcon from '../../assets/icons/sun-icon.svg';
import styles from './ThemeToggle.module.scss';

interface ThemeToggleProps {
  theme: string
  onToggle: () => void
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const icon = theme === 'light' ? MoonIcon : SunIcon;
  const altText
    = theme === 'light'
      ? 'Черная иконка луны - переключить на темную тему'
      : 'Белая иконка луны - переключить на светлую тему';

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={onToggle}
      aria-label={altText}
      title={theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
    >
      <img src={icon} alt={altText} className={styles.icon} />
    </button>
  );
}

export default ThemeToggle;
