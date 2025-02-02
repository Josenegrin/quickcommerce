module.exports = {
  extends: ['expo', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['/dist/*'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
        moduleDirectory: ['node_modules', 'src'],
      },
      alias: {
        map: [
          ['@src', './src'],
          ['@components', './src/components'],
          ['@screens', './src/screens'],
          ['@utils', './src/utils'],
          ['@services', './src/services'],
          ['@store', './src/store']
        ],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
};
