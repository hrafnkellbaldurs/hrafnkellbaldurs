const siteName = 'HrafnkellBaldurs'

module.exports = {
    siteMetadata: {
        title: siteName,
        description: 'Hrafnkell Baldursson Portfolio page',
        author: 'Hrafnkell Baldursson'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-offline',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-manifest',
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
        {
            resolve: 'gatsby-plugin-svgr',
            options: {
                icon: true,
                svgProps: {
                    className: 'svgr'
                }
                // see https://github.com/smooth-code/svgr for a list of all options
            },
        }
    ]
}
