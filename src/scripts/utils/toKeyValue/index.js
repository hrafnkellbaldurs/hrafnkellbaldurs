import * as R from 'ramda'

/**
 * Returns an object containing provided key and value of provided key in object
 * @param {string} key - The key of the value in the object
 * @param {Object} object - The object containing the key and value
 * @returns {Object}
 */
export default function toKeyValue(key, object) {
    if (R.either(R.isNil, R.isEmpty)(key)) {
        throw TypeError('A non-empty key must be provided')
    }

    return {
        key: key,
        value: object[key]
    }
}
