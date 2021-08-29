const nodeSass = require('node-sass');

const packageJson = require('./package.json');

const siteName = `HrafnkellBaldurs`;

module.exports = {
  siteMetadata: {
    title: siteName,
    description: packageJson.description,
    author: packageJson.author,
  },
  // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    // Enable all experiments aimed at improving develop server start time (DEV_SSR, PRESERVE_FILE_DOWNLOAD_CACHE, DEV_WEBPACK_CACHE)
    FAST_DEV: true,
    // Use webpack's persistent caching and don't delete webpack's cache when changing gatsby-node.js & gatsby-config.js files.
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
    // don't need to define it here (just if you need to change the options)
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteName,
        short_name: `HB`,
        start_url: `/`,
        background_color: `#1f2522`,
        theme_color: `#1f2522`,
        display: `standalone`,
        // Relative to the root of the site.
        icon: `src/assets/images/favicon.png`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: nodeSass,
      },
    },
    // Automatic type generation for graphql queries
    'gatsby-plugin-graphql-codegen',
    // Use gatsby-transformer-json and gatsby-source-filesystem for transforming json files from /src/data using graphql
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    // Use gatsby-source-filesystem to access assets folder from graphql
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        icon: true,
        svgProps: {
          className: `svgr`,
        },
        // see https://github.com/smooth-code/svgr for a list of all options
      },
    },
    {
      // This needs to be last in the array
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload',
          ],
        },
      },
    },
  ],
};
