module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['simple-import-sort'],
  rules: {
    'no-undef': 'warn',
    'prefer-const': 'warn',
    'no-unused-vars': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  ignorePatterns: ['node_modules', '.next']
}
