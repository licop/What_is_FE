module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2015
  },
  rules: {
    'no-alert': "error"
  },
  globals: {
    "jQuery": "readonly"
  }
}
