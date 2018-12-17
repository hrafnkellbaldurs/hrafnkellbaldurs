import moment from 'moment'
import * as R from 'ramda'

const roundHalf = R.pipe(
    R.multiply(2),
    Math.round,
    R.divide(R.__, 2),
    Math.abs
)

/**
 * Returns an object containing the amount of years and months between the given dates
 * @param {Date|String|Number} startDate
 * @param {Date|String|Number} endDate
 * @returns {Object}
 */
export default function getDateRangeDuration(startDate, endDate, fraction = false) {
    const defaultMoment = R.pipe(R.defaultTo(moment()), moment)

    const startDateMoment = defaultMoment(startDate).startOf('month')
    const endDateMoment = defaultMoment(endDate).endOf('month')

    let years = endDateMoment.diff(startDateMoment, 'years', fraction)
    years = fraction ? roundHalf(years) : years
    startDateMoment.add(years, 'years')

    let months = endDateMoment.diff(startDateMoment, 'months', fraction)
    months = fraction ? roundHalf(months) : months
    startDateMoment.add(months, 'months')

    return { years, months }
}
