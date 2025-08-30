import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    document.documentElement.setAttribute('data-theme', theme);

    document.body.style.backgroundColor
      = theme === 'light' ? '#ffffff' : '#121212';
    document.body.style.color = theme === 'light' ? '#333333' : '#ffffff';
    document.body.style.transition
      = 'background-color 0.3s ease, color 0.3s ease';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
