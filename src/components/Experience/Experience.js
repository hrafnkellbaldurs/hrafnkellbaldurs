import React from 'react'
import PropTypes from 'prop-types'
import styles from './Experience.module.scss'
import classnames from 'classnames'
import moment from 'moment'
import * as R from 'ramda'
import { getDateRangeDuration, createPluralAmountString } from '../../scripts/utils'

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

        const titleContainerProps = {
            className: classnames('twelve', 'columns', styles.titleContainer)
        }
        const detailsContainerProps = {
            className: classnames('twelve', 'columns', styles.detailsContainer)
        }

        const {
            startDateString,
            endDateString,
            durationString
        } = this.createDateStrings(startDate, endDate)

        return (
            <div className="row">
                <div { ...titleContainerProps }>
                    <div className={ styles.iconContainer }>{ icon }</div>
                    <h3 className={ styles.title }>{ title }</h3>
                </div>
                <div { ...detailsContainerProps }>
                    <div className={ styles.info }>
                        <span className={ styles.subtitle }>{ subtitle }</span>
                        <span className={ styles.dateContainer }>
                            <span className={ styles.date }>{ startDateString } - { endDateString }</span>
                            <span className={ styles.bullet }></span>
                            <span className={ styles.date }>{ durationString }</span>
                        </span>
                    </div>
                    {
                        description ? <p>{ description }</p> : null
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
