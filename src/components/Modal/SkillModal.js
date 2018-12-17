import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
    createGlobalLocalClassnames,
    createPluralAmountString
} from '../../scripts/utils'
import { SKILL_LEVELS } from '../../constants'
import styles from './SkillModal.scss'

const skillLevelClassMap = {
    [SKILL_LEVELS.NOVICE]: 'skill-level-novice',
    [SKILL_LEVELS.PROFICIENT]: 'skill-level-proficient',
    [SKILL_LEVELS.EXPERT]: 'skill-level-expert'
}

const SkillModal = props => {
    const {
        content,
        titleId,
        descriptionId,
        className
    } = props

    const {
        name,
        type,
        description,
        yearsOfExperience,
        logo,
        rating,
        skillLevel,
        skillLevelText,
        link
    } = content

    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'SkillModal'),
            className,
            skillLevelClassMap[skillLevel]
        )
    }

    const yearsOfExperienceText = `${ createPluralAmountString(yearsOfExperience, 'yr', 'yrs') } experience`

    return (
        <div { ...containerProps }>
            <div className="logoContainer">
                <img className="logo" src={ logo.src } alt={ logo.label } />
            </div>
            <h1 id={ titleId } className="name">{ name }</h1>
            <p id={ descriptionId } className="description">{ description }</p>
            <div className="metadata">
                <div className="content-container">
                    <div className="metadata-item skill-level-text">{ skillLevelText }</div>
                    <div className="metadata-item bullet"></div>
                    <div className="metadata-item years-of-experience">
                        <span>{ yearsOfExperienceText }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const skillContentShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    yearsOfExperience: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    logo: PropTypes.shape({
        src: PropTypes.string,
        label: PropTypes.string
    }).isRequired,
    rating: PropTypes.number,
    skillLevel: PropTypes.number,
    skillLevelText: PropTypes.string,
    link: PropTypes.string
})

SkillModal.propTypes = {
    content: skillContentShape,
    titleId: PropTypes.string.isRequired,
    descriptionId: PropTypes.string.isRequired
}

export default SkillModal
