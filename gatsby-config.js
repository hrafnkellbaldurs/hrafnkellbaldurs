const packageJson = require('./package.json')
const siteName = `HrafnkellBaldurs`

module.exports = {
    siteMetadata: {
        title: siteName,
        description: packageJson.description,
        author: packageJson.author,
        keywords: 'sample, something'
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: siteName,
                short_name: siteName,
                start_url: `/`,
                background_color: `#010312`,
                theme_color: `#010312`,
                display: `minimal-ui`,
                // Relative to the root of the site.
                icon: `src/assets/images/favicon.png`
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
            }
        },
        {
            resolve: `gatsby-transformer-json`,
            options: {}
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${ __dirname }/src/data`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${ __dirname }/src/assets`
            }
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
