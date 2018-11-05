const siteName = 'HrafnkellBaldurs'

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
        // Relative to the root of the site.
        icon: 'src/assets/images/favicon.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass'
  ]
}
