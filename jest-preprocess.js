// Config taken from https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/
const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
};

// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require('babel-jest').default.createTransformer(babelOptions);
