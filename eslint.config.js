const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
      },
      globals: {
        ...globals.es2021,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      semi: 'off',
      'arrow-parens': 'error',
      camelcase: 'error',
      'arrow-spacing': 'error',
      complexity: ['error', 5],
      'no-undef': 'error',
      curly: 'error',
      eqeqeq: 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'max-lines-per-function': ['error', 15],
      'max-lines': ['error', 50],
      'max-depth': ['error', 3],
      'max-classes-per-file': ['error', 1],
      'max-params': ['error', 2],
      'no-console': 'error',
      'no-unused-vars': 'error',
      'dot-notation': 'error',
    },
  },
]
