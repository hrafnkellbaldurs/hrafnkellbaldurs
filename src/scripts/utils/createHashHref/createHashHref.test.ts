import * as R from 'ramda';
import { createHashHref } from './index';

describe(`createHashHref`, () => {
  it(`should return a string`, () => {
    const result = createHashHref(`hash`);
    expect(typeof result).toEqual(`string`);
  });

  it(`should default path to "/"`, () => {
    const hash = `hash`;
    const expected = `/#${hash}`;
    expect(createHashHref(hash)).toEqual(expected);
  });

  it(`should only contain one # character at the start of the hash`, () => {
    const isValid = (hash: string) => {
      const hashHref = createHashHref(hash);

      // Expect hashCount to be 1
      const hashCount = R.pipe(
        R.match(/#/g),
        R.defaultTo([]),
        R.length,
      )(hashHref);
      expect(hashCount).toEqual(1);

      // Expect hashHref to have `#` as second character, f.ex `/#`
      expect(hashHref.indexOf(`#`)).toBe(1);
    };

    isValid(`hash`);
    isValid(`#hash`);
    isValid(`##hash`);
    isValid(`#hash#`);
    isValid(`hash#`);
    isValid(`ha#sh`);
  });

  it(`should throw a TypeError when hash is not provided, null, undefined or empty`, () => {
    const callCreateHashHref = (hash?: string | null, path?: string) => () =>
      createHashHref(hash, path);

    expect(callCreateHashHref()).toThrow(TypeError);
    expect(callCreateHashHref(``)).toThrow(TypeError);
    expect(callCreateHashHref(`#`)).toThrow(TypeError);
    expect(callCreateHashHref(null)).toThrow(TypeError);
    expect(callCreateHashHref(undefined)).toThrow(TypeError);
  });
});
