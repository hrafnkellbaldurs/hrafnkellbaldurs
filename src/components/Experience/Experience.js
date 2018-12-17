import React from 'react'
import PropTypes from 'prop-types'
import styles from './Experience.module.scss'
import classnames from 'classnames'
import moment from 'moment'
import * as R from 'ramda'
import HTMLReactParser from 'html-react-parser'
import { getDateRangeDuration, createPluralAmountString, createGlobalLocalClassnames } from '../../scripts/utils'

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

class Experience extends React.PureComponent {
    createDateStrings(startDate, endDate, dateFormat = 'MMM YYYY') {
        const defaultMoment = R.pipe(R.defaultTo(moment()), moment)
        const startDateMoment = defaultMoment(startDate)
        const endDateMoment = defaultMoment(endDate)

        // startDateString
        const startDateString = startDateMoment.format(dateFormat)

        // endDate
        const endDateIsToday = endDateMoment.isSame(moment(), 'day')
        const endDateString = endDateIsToday ? 'Present' : endDateMoment.format(dateFormat)

        // durationString
        const { years, months } = getDateRangeDuration(startDate, endDate)
        const yearsString = createPluralAmountString(years, 'yr', 'yrs')
        const monthsString = createPluralAmountString(months, 'mo', 'mos')

        const durationString = R.trim(`${ yearsString } ${ monthsString }`)

        return {
            startDateString,
            endDateString,
            durationString
        }
    }

    render() {
        const {
            icon,
            title,
            subtitle,
            endDate,
            startDate,
            description
        } = this.props

        const containerProps = {
            className: classnames(
                'row',
                globalLocalClassnames('Experience')
            )
        }

        const {
            startDateString,
            endDateString,
            durationString
        } = this.createDateStrings(startDate, endDate)

        return (
            <div { ...containerProps }>
                <div className="twelve titleContainer">
                    <div className="iconContainer">{ icon }</div>
                    <h3 className="title">{ title }</h3>
                </div>
                <div className="twelve detailsContainer">
                    <div className="info">
                        <span className="subtitle">{ subtitle }</span>
                        <span className="dateContainer">
                            <span className="date">{ startDateString } - { endDateString }</span>
                            <span className="bullet"></span>
                            <span className="date">{ durationString }</span>
                        </span>
                    </div>
                    {
                        description ? (
                            <div className="description">
                                { HTMLReactParser(description) }
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

Experience.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

export default Experience
