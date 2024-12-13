module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Potential Errors
    'no-console': 'warn',
    'no-debugger': 'warn',

    // Best Practices
    eqeqeq: ['error', 'always'],
    'no-var': 'error',
    'prefer-const': 'warn',

    // Variables
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // Stylistic Issues
    semi: ['error', 'always'],
    quotes: ['error', 'single'],

    // ES6
    'arrow-body-style': ['error', 'as-needed'],
  },
  ignorePatterns: ['node_modules/', 'public/'],
};
