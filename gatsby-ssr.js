/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Wrap the root element with the context provider
const store = require('./src/store')
exports.wrapRootElement = store.wrapWithProvider

// Used for debugging build
const verboseLogger = (() => {
    const COLORS = {
        FG_YELLOW: '\x1b[33m',
        FG_GREEN: '\x1b[32m',
        RESET: '\x1b[0m'
    }

    const logStyleHeaderComponents = function logStyleHeaderComponents(color, message, hc) {
        const mapped = hc
            .map((x, i) => ({ ...x, i }))
            .filter(x => x.type === 'style')
            .map(({ type, key, ref, props: { 'data-href': dataHref }, i }) => ({
                i,
                dataHref
            }))
        console.log(color, `\n\n===Style Head Components ${ message }===\n`, mapped, '\n\n', COLORS.RESET)
    }

    return {
        logStyleHeaderComponents,
        COLORS: {
            FG_YELLOW: '\x1b[33m',
            FG_GREEN: '\x1b[32m',
            RESET: '\x1b[0m'
        }
    }
})()

// Sorts style elements that will be included in the header so that the app styles are at the top.
// A bug I couldn't find the root of was causing styles being included in the incorrect order
// (app styles were being included last, causing css priority conflicts)
function sortHeadComponentsByAppStyles(headComponents) {
    // verboseLogger.logStyleHeaderComponents(verboseLogger.COLORS.FG_YELLOW, 'BEFORE SORT', headComponents)

    headComponents.sort((x, y) => {
        const isStyle = x => x.type === 'style'
        const xIsStyle = isStyle(x)
        const yIsStyle = isStyle(y)

        // Only sort style tags
        if (xIsStyle || yIsStyle) {
            const isApp = x => isStyle(x) && x.props['data-href'].includes('app')

            // Sort app styles to be first in order
            if (isApp(x)) {
                return -1
            } else if (isApp(y)) {
                return 1
            }

            // Sort all styles to be first in order
            if (xIsStyle) {
                return -1
            } else if (yIsStyle) {
                return 1
            }
        }

        return 0
    })

    // verboseLogger.logStyleHeaderComponents(verboseLogger.COLORS.FG_GREEN, 'POST SORT', headComponents)
}

exports.onPreRenderHTML = ({ getHeadComponents }) => {
    if (process.env.NODE_ENV !== 'production') {
        return
    }

    sortHeadComponentsByAppStyles(getHeadComponents())
}
