import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
    createGlobalLocalClassnames,
    createPluralAmountString,
    getColorBySkillLevel
} from '../../scripts/utils'
import styles from './SkillModal.scss'

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
            className
        )
    }

    const skillLevelColor = getColorBySkillLevel(skillLevel)
    const skillLevelProps = {
        className: 'skill-level',
        style: {
            color: skillLevelColor
        }
    }

    const metaDataProps = {
        className: 'metadata flex flex--center-both',
        style: {
            borderColor: skillLevelColor
        }
    }

    const yearsOfExperienceText = `${ createPluralAmountString(yearsOfExperience, 'yr', 'yrs') } experience`

    return (
        <div { ...containerProps }>
            <div className="logoContainer">
                <img className="logo" src={ logo.src } alt={ logo.label } />
            </div>
            <h1 id={ titleId } className="name">{ name }</h1>
            <p id={ descriptionId } className="description">{ description }</p>
            <div { ...metaDataProps }>
                <div { ...skillLevelProps }>{ skillLevelText }</div>
                <div className="bullet"></div>
                <div className="years-of-experience">
                    { yearsOfExperienceText }
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
