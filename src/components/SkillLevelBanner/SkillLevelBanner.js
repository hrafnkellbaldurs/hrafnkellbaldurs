import React from 'react'
import styles from './SkillLevelBanner.scss'
import classnames from 'classnames'
import {
    createGlobalLocalClassnames,
    getDateRangeDuration,
    createPluralAmountString
} from '../../scripts/utils'
import { SKILL_LEVELS } from '../../constants'
import * as R from 'ramda'

const skillLevelClassMap = {
    [SKILL_LEVELS.NOVICE]: 'skill-level-novice',
    [SKILL_LEVELS.PROFICIENT]: 'skill-level-proficient',
    [SKILL_LEVELS.EXPERT]: 'skill-level-expert'
}

const createYearsOfExperienceText = R.pipe(
    (startDate, endDate) => getDateRangeDuration(startDate, endDate, true),
    R.prop('years'),
    years => createPluralAmountString(years, 'yr', 'yrs'),
    yearsString => `${ yearsString } experience`
)

const SkillLevelBanner = props => {
    const {
        skillLevel,
        skillLevelText,
        startDate,
        endDate,
        borderPosition = 'top'
    } = props

    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'SkillLevelBanner'),
            skillLevelClassMap[skillLevel],
            `border-${ borderPosition }`
        )
    }

    const yearsOfExperienceText = createYearsOfExperienceText(
        startDate,
        endDate
    )

    return (
        <div { ...containerProps }>
            <div className="content-container">
                <div className="item skill-level-text">{ skillLevelText }</div>
                <div className="item bullet"></div>
                <div className="item years-of-experience">
                    <span className="text">{ yearsOfExperienceText }</span>
                </div>
            </div>
        </div>
    )
}

export default SkillLevelBanner
