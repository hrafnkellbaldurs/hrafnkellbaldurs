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
                short_name: `HB`,
                start_url: `/`,
                background_color: `#1f2522`,
                theme_color: `#1f2522`,
                display: `standalone`,
                // Relative to the root of the site.
                icon: `src/assets/images/favicon.png`
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: [
                    require('path').resolve(__dirname, 'node_modules'),
                ]
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
        },
        {
            // This needs to be last in the array
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    '/*': [
                        'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload'
                    ]
                }
            }
        }
    ]
}
