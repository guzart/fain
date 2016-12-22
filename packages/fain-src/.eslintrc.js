module.exports = {
  extends: 'airbnb/legacy',
  parser: 'babel-eslint',
  rules: {
    'import/no-extraneous-dependencies': ['error',
      { devDependencies: true }
    ],
  },
};
