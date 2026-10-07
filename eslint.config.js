import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat['recommended-latest'] ?? reactHooks.configs['recommended-latest'],
  jsxA11y.flatConfigs.recommended,
  prettier,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: { globals: { ...globals.browser, __APP_VERSION__: 'readonly' } },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/prop-types': 'warn',
      'react/display-name': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'no-restricted-imports': ['error', { patterns: ['@mui/*/*/*'] }]
    }
  }
];
