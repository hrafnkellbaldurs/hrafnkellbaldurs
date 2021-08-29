/**
 * Returns the same string as provided, with the first letter uppercased
 */
export const capitalize = (str: string): string =>
  str[0].toUpperCase + str.slice(1);
