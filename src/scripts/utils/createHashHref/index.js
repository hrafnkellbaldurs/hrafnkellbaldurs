import * as R from 'ramda'

const isNilOrEmpty = R.either(R.isNil, R.isEmpty)

/**
 * Creates a full href path out of given path and hashId
 * @param {string} hash - The hash to add to the path
 * @param {string} [path='/'] - The path to add the hash to
 */
export default function createHashHref(hash, path = '/') {
    const strippedHash = R.defaultTo('', hash).replace(/#/g, '')
    if (isNilOrEmpty(strippedHash)) {
        throw TypeError('A non-empty hash must be provided')
    }

    return `${ path }#${ strippedHash }`
}
