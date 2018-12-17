import createHashHref from './index'
import * as R from 'ramda'

describe('createHashHref', () => {
    it('should return a string', () => {
        const result = createHashHref('hash')
        expect(typeof result).toEqual('string')
    })

    it('should default path to "/"', () => {
        const hash = 'hash'
        const expected = `/#${ hash }`
        expect(createHashHref(hash)).toEqual(expected)
    })

    it('should only contain one # character at the start of the hash', () => {
        const hasOneHash = R.pipe(
            R.match(/#/g),
            R.defaultTo([]),
            R.length,
            hashCount => expect(hashCount).toEqual(1)
        )
        const hashStartsAfterPath = hashHref => expect(hashHref.indexOf('#')).toBe(1)
        const isValid = R.pipe(
            createHashHref,
            R.allPass([
                hasOneHash,
                hashStartsAfterPath
            ])
        )

        isValid('hash')
        isValid('#hash')
        isValid('##hash')
        isValid('#hash#')
        isValid('hash#')
        isValid('ha#sh')
    })

    it('should throw a TypeError when hash is not provided, null, undefined or empty', () => {
        const callCreateHashHref = (...args) => () => createHashHref(...args)
        expect(callCreateHashHref()).toThrow(TypeError)
        expect(callCreateHashHref('')).toThrow(TypeError)
        expect(callCreateHashHref('#')).toThrow(TypeError)
        expect(callCreateHashHref(null)).toThrow(TypeError)
        expect(callCreateHashHref(undefined)).toThrow(TypeError)
    })
})
