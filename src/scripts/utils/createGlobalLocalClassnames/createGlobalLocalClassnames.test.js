import createGlobalLocalClassnames from './index'

describe('createGlobalLocalClassnames', () => {
    it('should return an array', () => {
        const result = createGlobalLocalClassnames({ myKey: 'myVal' }, 'myKey')
        expect(result).toBeInstanceOf(Array)
    })

    it('should return an array with two strings, where first is local and second is global', () => {
        const globalKey = 'global'
        const localKey = 'local'
        const result = createGlobalLocalClassnames({ [globalKey]: localKey }, globalKey)
        expect(result.length).toBe(2)
        expect(result[0]).toBe(localKey)
        expect(result[1]).toBe(globalKey)
    })
})
