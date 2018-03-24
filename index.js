module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb',
  rules: {
    semi: [2, 'never'],
    singleQuote: true,
    'no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
    'max-params': [2, 5],
    'max-statements': [2, 50],
    jsxBracketSameLine: true,
    firstAttributeOnSameLine: true,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-bind': 'warn',
  },
  env: {
    browser: true,
    es6: true,
  },
}

