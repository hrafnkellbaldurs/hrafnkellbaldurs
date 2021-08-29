import * as R from 'ramda';

/**
 * Returns an array, where the string is split by ',' by default.
 * If an array of strings is passed, it's returned as is
 */
export const stringToArray = (
  str?: null | string | (string | null | undefined)[],
  separator = `,`,
): string[] =>
  R.ifElse(
    Array.isArray,
    R.identity,
    R.pipe(
      R.defaultTo(``),
      R.ifElse(
        R.isEmpty,
        R.always([]),
        R.pipe(R.split(separator), R.map(R.trim)),
      ),
    ),
  )(str);
