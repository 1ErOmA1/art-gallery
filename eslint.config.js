import antfu from '@antfu/eslint-config';

export default antfu({
  typescript: true,
  react: true,

  extends: ['plugin:prettier/recommended'],

  rules: {
    'style/semi': ['error', 'always'],
    'style/quotes': ['error', 'single'],
    'style/indent': ['error', 2],
  },
  ignores: ['dist'],
});
