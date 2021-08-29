import * as R from 'ramda';

/**
 * Returns an object containing provided key and value of provided key in object
 * @param key - The key of the value in the object
 * @param object - The object containing the key and value
 */
export function toKeyValue<K extends keyof T, T>(
  key: K,
  object: T,
): { key: K; value: T[K] } {
  if (R.either(R.isNil, R.isEmpty)(key)) {
    throw TypeError(`A non-empty key must be provided`);
  }

  return {
    key,
    value: object[key],
  };
}
