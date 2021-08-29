import classNames from 'classnames';
import React from 'react';
import * as R from 'ramda';
import moment, { MomentInput } from 'moment';
import HTMLReactParser from 'html-react-parser';

import {
  createGlobalLocalClassnames,
  createPluralAmountString,
  getDateRangeDuration,
} from '@/scripts/utils';

import * as styles from './Experience.module.scss';

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles]);

const createDateStrings = (
  startDate: MomentInput,
  endDate: MomentInput,
  dateFormat = `MMM YYYY`,
) => {
  const defaultMoment = (val: MomentInput) =>
    !R.isNil(val) ? moment(val) : moment();
  const startDateMoment = defaultMoment(startDate);
  const endDateMoment = defaultMoment(endDate);

  // startDateString
  const startDateString = startDateMoment.format(dateFormat);

  // endDate
  const endDateIsToday = endDateMoment.isSame(moment(), `day`);
  const endDateString = endDateIsToday
    ? `Present`
    : endDateMoment.format(dateFormat);

  // durationString
  const { years, months } = getDateRangeDuration(startDate, endDate);
  const yearsString = createPluralAmountString(years, `yr`, `yrs`);
  const monthsString = createPluralAmountString(months, `mo`, `mos`);

  const durationString = R.trim(`${yearsString} ${monthsString}`);

  return {
    startDateString,
    endDateString,
    durationString,
  };
};

export type ExperienceProps = {
  id: string;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  icon?: React.ComponentType | null;
  startDate?: string | null;
  endDate?: string | null;
};

export const Experience: React.FC<ExperienceProps> = (props) => {
  const {
    title,
    subtitle,
    description,
    icon: Icon,
    startDate,
    endDate,
  } = props;

  const { startDateString, endDateString, durationString } = createDateStrings(
    startDate,
    endDate,
  );

  return (
    <div className={classNames(`row`, globalLocalClassnames(`Experience`))}>
      <div className="twelve titleContainer">
        <div className="iconContainer">{Icon && <Icon />}</div>
        <h3 className="title">{title}</h3>
      </div>
      <div className="twelve detailsContainer">
        <div className="info">
          <span className="subtitle">{subtitle}</span>
          <span className="dateContainer">
            <span className="date">
              {startDateString} - {endDateString}
            </span>
            <span className="bullet" />
            <span className="date">{durationString}</span>
          </span>
        </div>
        {description && (
          <div className="description">{HTMLReactParser(description)}</div>
        )}
      </div>
    </div>
  );
};
