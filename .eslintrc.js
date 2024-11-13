module.exports = {
  extends: ['expo', 'prettier'],
  plugin: ['prettier'],
  ignorePatterns: ['/dist/*'],
  rules: {
    'prettier/prettier': 'error',
  },
};
