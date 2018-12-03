module.exports = {
    extends: ['standard', 'plugin:jest/recommended'],
    plugins: ['standard', 'react', 'jest'],
    rules: {
      'no-var': 'error', // optional, recommended when using es6+
      'no-unused-vars': 1, // recommended
      'arrow-spacing': ['error', { 'before': true, 'after': true }], // recommended
      'indent': ['error', 4],
      'comma-dangle': ['error', {
        'objects': 'only-multiline',
        'arrays': 'only-multiline',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      }],
  
      // options to emulate prettier setup
      'semi': ['error', 'never'],
      'template-curly-spacing': ['error', 'always'],
      'arrow-parens': ['error', 'as-needed'],
  
      // standard.js
      'space-before-function-paren': ['error', {
        'named': 'never',
        'anonymous': 'never',
        'asyncArrow': 'always'
      }],
  
      // standard plugin - options
      'standard/object-curly-even-spacing': ['error', 'either'],
      'standard/array-bracket-even-spacing': ['error', 'either'],
      'standard/computed-property-even-spacing': ['error', 'even'],
      'standard/no-callback-literal': 'off',
  
      // react plugin - options
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-undef': 'error',
    },
    "env": {
      "jest/globals": true
    },
    parser: 'babel-eslint',
    parserOptions: {
      'ecmaVersion': 8, // optional, recommended 6+
    }
  }