module.exports = {
  extends: ['expo', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['/dist/*'],
  rules: {
    'prettier/prettier': 'error',
  },
};
