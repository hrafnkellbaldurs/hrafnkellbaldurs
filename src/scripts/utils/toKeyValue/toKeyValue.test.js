import toKeyValue from './index'

describe('toKeyValue', () => {
    it('should return an object', () => {
        const result = toKeyValue('myKey', { myKey: 'myVal' })
        expect(result).toBeInstanceOf(Object)
    })

    it('should return an object with props \'key\' and \'value\'', () => {
        const result = toKeyValue('myKey', { myKey: 'myVal' })
        expect(result).toHaveProperty('key')
        expect(result).toHaveProperty('value')
    })

    it('should return an object with correct key and value', () => {
        const key = 'myKey'
        const value = 'myVal'
        const result = toKeyValue(key, { [key]: value })
        expect(result.key).toBe(key)
        expect(result.value).toBe(value)
    })

    it('should throw a TypeError if no key or an empty key is not provided', () => {
        expect(() => toKeyValue(null, {})).toThrow(TypeError)
        expect(() => toKeyValue(undefined, {})).toThrow(TypeError)
        expect(() => toKeyValue('', {})).toThrow(TypeError)
    })

    it('should throw if no object is provided', () => {
        const toKeyValueWithNoObject = () => toKeyValue('myKey')
        expect(toKeyValueWithNoObject).toThrow()
    })
})
