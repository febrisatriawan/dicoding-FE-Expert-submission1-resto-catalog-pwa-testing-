module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
  },
};
