import { withPrefix } from 'gatsby'

/**
 * Tells you if the current location path is on the homepage
 * @returns {boolean}
 */
export default function isHome() {
    return window.location.pathname === withPrefix('/')
}
