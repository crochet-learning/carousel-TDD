module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true
  },
  parser: 'babel-eslint',
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }]
  },
  settings: {
    react: {
      version: '16.4.2'
    }
  }
};
