import { toKeyValue } from './index';

describe(`toKeyValue`, () => {
  it(`should return an object`, () => {
    const result = toKeyValue(`myKey`, { myKey: `myVal` });
    expect(result).toBeInstanceOf(Object);
  });

  it(`should return an object with props 'key' and 'value'`, () => {
    const result = toKeyValue(`myKey`, { myKey: `myVal` });
    expect(result).toHaveProperty(`key`);
    expect(result).toHaveProperty(`value`);
  });

  it(`should return an object with correct key and value`, () => {
    const key = `myKey`;
    const value = `myVal`;
    const result = toKeyValue(key, { [key]: value });
    expect(result.key).toBe(key);
    expect(result.value).toBe(value);
  });
});
