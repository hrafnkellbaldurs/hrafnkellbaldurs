import getDateRangeDuration from './index'
import moment from 'moment'

describe('getDateRangeDuration', () => {
    it('should return an object', () => {
        const result = getDateRangeDuration()
        expect(result).toBeInstanceOf(Object)
    })

    it(`should return an object with props 'years', 'months' and 'days'`, () => {
        const result = getDateRangeDuration(moment(), moment())
        expect(result).toHaveProperty('years')
        expect(result).toHaveProperty('months')
    })

    it('should work with a simple input', () => {

        const startDate = moment()
        const durations = {
            years: 1,
            months: 1
        }
        const endDate = moment().add(durations)
        const result = getDateRangeDuration(startDate, endDate)
        expect(result.years).toEqual(durations.years)
        expect(result.months).toEqual(durations.months)
    })
})
