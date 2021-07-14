import moment, { MomentInput } from 'moment';
import * as R from 'ramda';

const roundHalf = R.pipe(
  R.multiply(2),
  Math.round,
  // eslint-disable-next-line no-underscore-dangle
  R.divide(R.__, 2),
  Math.abs,
);

/**
 * Returns an object containing the amount of years and months between the given dates
 */
export function getDateRangeDuration(
  startDate: MomentInput,
  endDate: MomentInput,
  fraction = false,
): { years: number; months: number } {
  const defaultMoment = (val: MomentInput) =>
    !R.isNil(val) ? moment(val) : moment();

  const startDateMoment = defaultMoment(startDate).startOf(`month`);
  const endDateMoment = defaultMoment(endDate).endOf(`month`);

  let years = endDateMoment.diff(startDateMoment, `years`, fraction);
  years = fraction ? roundHalf(years) : years;
  startDateMoment.add(years, `years`);

  let months = endDateMoment.diff(startDateMoment, `months`, fraction);
  months = fraction ? roundHalf(months) : months;
  startDateMoment.add(months, `months`);

  return { years, months };
}
