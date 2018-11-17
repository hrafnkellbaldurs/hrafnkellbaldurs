const packageJson = require('./package.json')
const siteName = `HrafnkellBaldurs`

module.exports = {
    siteMetadata: {
        title: siteName,
        description: packageJson.description,
        author: packageJson.author
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: siteName,
                short_name: siteName,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // Relative to the root of the site.
                icon: `src/assets/images/favicon.png`
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${ __dirname }/src/data`
            }
        },
        {
            resolve: `gatsby-transformer-json`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-svgr`,
            options: {
                icon: true,
                svgProps: {
                    className: `svgr`
                }
                // see https://github.com/smooth-code/svgr for a list of all options
            }
        }
    ]
}
