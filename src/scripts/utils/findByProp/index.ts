import * as R from 'ramda';

/**
 * Returns the object that matches the propName: value check
 * Returns undefined if nothing is found
 * @param propName - The prop name/key of value in the object you want to find
 * @param value - The value to match
 * @param arr - An array of objects
 * @returns {func|Object|undefined} - This function is curried, it will return functions until all parameters have been supplied
 */
export const findByProp = R.curry((propName = `id`) =>
  R.converge(R.find, [R.pipe(R.nthArg(0), R.propEq(propName)), R.nthArg(1)]),
);
