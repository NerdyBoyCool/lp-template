module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', '@html-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
    },
    {
      files: ['./openapi/schema/generated.ts'],
      rules: {
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-empty-interface': 0,
      },
    },
  ],
}
