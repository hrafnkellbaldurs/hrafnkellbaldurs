/**
 * Creates a string from the given amount, string and stringPlural based on the amount
 * @returns {string}
 */
export function createPluralAmountString(
  amount = 0,
  string = ``,
  stringPlural = ``,
  fallback = ``,
  includeAmount = true,
): string {
  let pluralAmount = fallback;

  if (amount > 0) {
    pluralAmount = `${includeAmount ? `${amount} ` : ``}${
      amount > 1 ? stringPlural : string
    }`;
  }

  return pluralAmount;
}
