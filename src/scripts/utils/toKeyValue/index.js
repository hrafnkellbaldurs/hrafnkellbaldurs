/**
 * Returns an object containing provided key and value of provided key in object
 * @param {string} key - The key of the value in the object
 * @param {Object} object - The object containing the key and value
 * @returns {Object}
 */
export default function toKeyValue(key, object) {
    return {
        key: key,
        value: object[key]
    }
}
