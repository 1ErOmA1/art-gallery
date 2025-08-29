import antfu from '@antfu/eslint-config';

export default antfu({
  // Включите поддержку React
  react: true,

  // Включите поддержку TypeScript
  typescript: true,

  // Настройки форматирования
  formatters: true,

  // Правила, которые хотите переопределить (соответствуют заданию)
  rules: {
    'style/semi': ['error', 'always'], // Точки с запятой ОБЯЗАТЕЛЬНЫ
    'style/indent': ['error', 2], // 2 пробела для отступов
    'style/quotes': ['error', 'single'], // Одинарные кавычки
  },

  // Игнорируем папку сборки
  ignores: ['dist/'],
});
