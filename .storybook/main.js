const TsconfigPathsPlugin = require(`tsconfig-paths-webpack-plugin`);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        rule: {
          test: /\.s[ca]ss$/,
        },
        cssLoaderOptions: {
          modules: {
            // enable CSS modules for all files matching /\.module\.\w+$/i.test(filename)
            // and /\.icss\.\w+$/i.test(filename) regexp.
            auto: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
            // Enable esmodules named exporst for locals
            // to make imports work like in gatsby `import * as styles from ...`
            // https://github.com/gatsbyjs/gatsby/discussions/30191#discussioncomment-471552
            // https://webpack.js.org/loaders/css-loader/#namedexport
            namedExport: true,
          },
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    // transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    // NOTE: config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/] did not work, used include instead
    config.module.rules[0].include.push(/node_modules\/gatsby\//);

    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve('babel-plugin-remove-graphql-queries'),
    );

    // Add support for tsconfig paths
    // eslint-disable-next-line no-param-reassign
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  },
  // https://storybook.js.org/docs/react/configure/typescript
  typescript: {
    // Optionally run fork-ts-checker-webpack-plugin
    check: false,
    // Options to pass to fork-ts-checker-webpack-plugin if it's enabled
    checkOptions: {},
    // Which react docgen processor to run:
    // "react-docgen-typescript", "react-docgen", false
    reactDocgen: 'react-docgen-typescript',
    // Options to pass to react-docgen-typescript-plugin if react-docgen-typescript is enabled.
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
