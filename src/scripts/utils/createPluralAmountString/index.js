/**
 * Creates a string from the given amount, string and stringPlural based on the amount
 * @param {Number} [amount=0]
 * @param {String} [string='']
 * @param {String} [stringPlural='']
 * @param {String} [fallback='']
 * @returns {string}
 */
export default function createPluralAmountString(amount = 0, string = '', stringPlural = '', fallback = '') {
    let pluralAmount = fallback

    if (amount >= 1) {
        pluralAmount = `${ amount } ${ amount > 1 ? stringPlural : string }`
    }

    return pluralAmount
}
