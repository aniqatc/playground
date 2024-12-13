module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Express/Node specific
    'no-console': ['warn', { allow: ['log', 'error'] }],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_|next|req|res',
      },
    ],

    // Best Practices
    eqeqeq: ['error', 'always'],
    'no-var': 'error',
    'prefer-const': 'warn',
    'no-multiple-empty-lines': ['error', { max: 2 }],

    // Style
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'arrow-body-style': ['error', 'as-needed'],
  },
  ignorePatterns: ['node_modules/', 'client/', 'public/', '.env', 'docs/'],
};
