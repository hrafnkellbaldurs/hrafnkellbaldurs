import { createPluralAmountString } from './index';

describe(`createPluralAmountString`, () => {
  it(`should return a string`, () => {
    const result = createPluralAmountString();
    expect(typeof result).toEqual(`string`);
  });

  it(`should return the given plural if amount is higher than 1'`, () => {
    const string = `egg`;
    const pluralString = `eggs`;
    const amount = 2;
    const result = createPluralAmountString(amount, string, pluralString);
    expect(result).toEqual(`${amount} ${pluralString}`);
  });

  it(`should return the non plural amount if amount is 1`, () => {
    const string = `egg`;
    const pluralString = `eggs`;
    const amount = 1;
    const result = createPluralAmountString(amount, string, pluralString);
    expect(result).toEqual(`${amount} ${string}`);
  });

  it(`should return the non plural amount if amount is between 0 and 1`, () => {
    const string = `egg`;
    const pluralString = `eggs`;
    const amount = 0.1;
    const result = createPluralAmountString(amount, string, pluralString);
    expect(result).toEqual(`${amount} ${string}`);
  });

  it(`should return fallback if amount is lower than 0`, () => {
    const amount = 0;
    const fallback = `No eggs`;
    const result = createPluralAmountString(amount, `egg`, `eggs`, fallback);
    expect(result).toEqual(fallback);
  });
});
