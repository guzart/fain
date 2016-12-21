module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'import/no-extraneous-dependencies': ['error',
      { devDependencies: true }
    ],
  },
};