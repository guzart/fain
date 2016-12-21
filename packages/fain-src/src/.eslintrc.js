module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    ClassName: true,
    HTMLInputElement: true,
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', 'react'] }]
  },
};
