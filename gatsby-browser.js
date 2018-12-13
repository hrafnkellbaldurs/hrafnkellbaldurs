/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Wrap the root element with the context provider
const store = require('./src/store')
exports.wrapRootElement = store.wrapWithProvider

// Global styles
require('./src/styles/global/main.scss')
exports.onClientEntry = () => {}

