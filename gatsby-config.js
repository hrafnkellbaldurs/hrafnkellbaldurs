var siteName = 'HrafnkellBaldurs';

module.exports = {
  siteMetadata: {
    title: siteName,
    description: 'Hrafnkell Baldursson Portfolio page',
    author: 'Hrafnkell Baldursson'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: siteName,
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass'
  ]
}
