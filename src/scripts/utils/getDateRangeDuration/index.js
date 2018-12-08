import moment from 'moment'
import * as R from 'ramda'

/**
 * Returns an object containing the amount of years and months between the given dates
 * @param {Date|String|Number} startDate
 * @param {Date|String|Number} endDate
 * @returns {Object}
 */
export default function getDateRangeDuration(startDate, endDate) {
    const defaultMoment = R.pipe(R.defaultTo(moment()), moment)

    const startDateMoment = defaultMoment(startDate).startOf('month')
    const endDateMoment = defaultMoment(endDate).endOf('month')

    const years = endDateMoment.diff(startDateMoment, 'years')
    startDateMoment.add(years, 'years')

    const months = endDateMoment.diff(startDateMoment, 'months')
    startDateMoment.add(months, 'months')

    return { years, months }
}
