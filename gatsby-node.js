/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Manually add sourcemaps, since it's not working by default for some reason
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage === 'develop') {
        actions.setWebpackConfig({
            devtool: 'cheap-module-source-map'
        })
    }
}
