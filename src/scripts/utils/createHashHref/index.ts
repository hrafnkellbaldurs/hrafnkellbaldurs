import * as R from 'ramda';

const isNilOrEmpty = R.either(R.isNil, R.isEmpty);

/**
 * Creates a full href path out of given path and hashId
 * @param hash - The hash to add to the path
 * @param path - The path to add the hash to
 * @returns Full href path out of given path and hashId
 */
export function createHashHref(hash?: string | null, path = `/`): string {
  const strippedHash = R.defaultTo(``, hash).replace(/#/g, ``);
  if (isNilOrEmpty(strippedHash)) {
    throw TypeError(`A non-empty hash must be provided`);
  }

  return `${path}#${strippedHash}`;
}
