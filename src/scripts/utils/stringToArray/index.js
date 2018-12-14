import * as R from 'ramda'

/**
 * Returns an array, where the string is split by ',' by default.
 * If an array of strings is passed, it's returned as is
 * @param {string|string[]} [str='']
 * @returns {string[]}
 */
const stringToArray = (str, separator = ',') => R.ifElse(
    Array.isArray,
    R.identity,
    R.pipe(
        R.defaultTo(''),
        R.split(separator),
        R.map(R.trim)
    )
)(str)
export default stringToArray
