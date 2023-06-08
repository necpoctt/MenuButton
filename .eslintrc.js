module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'jest','import'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: [
    '.eslintrc.js',
    'prettier.config.js',
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/named":'off',
    "react/jsx-filename-extension": [0],
    "import/extensions": "off"
  },
};