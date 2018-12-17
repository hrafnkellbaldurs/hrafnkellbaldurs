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
    years => createPluralAmountString(years, 'yr', 'yrs', '', false),
    yearsText => `${ yearsText } experience`
)

const SkillLevelBanner = props => {
    const {
        skillLevel,
        skillLevelText,
        startDate,
        endDate,
        years,
        borderPosition = 'bottom'
    } = props

    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'SkillLevelBanner'),
            skillLevelClassMap[skillLevel],
            `border-${ borderPosition }`
        )
    }

    const yearsOfExperienceText = createYearsOfExperienceText(years)

    return (
        <div { ...containerProps }>
            <div className="content-container">
                <div className="item skill-level-text">{ skillLevelText }</div>
                <div className="item bullet"></div>
                <div className="item years-of-experience">
                    <span className="text">
                        <span className="years">{ years }</span> <span className="of-experience">{ yearsOfExperienceText }</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SkillLevelBanner
