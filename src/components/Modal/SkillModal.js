import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
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
        rating
    } = content

    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'SkillModal'),
            className
        )
    }

    return (
        <div { ...containerProps }>
            <div className="logoContainer">
                <img className="logo" src={ logo.src } alt={ logo.label } />
            </div>
            <h1 id={ titleId } className="name">{ name }</h1>
            <p id={ descriptionId } className="description">{ description }</p>
            <div className="metadata">
                <div className="years-of-experience">
                    <span className="years">{ yearsOfExperience }</span>
                    <span className="of-experience">years of experience</span>
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
    rating: PropTypes.number
})

SkillModal.propTypes = {
    content: skillContentShape,
    titleId: PropTypes.string.isRequired,
    descriptionId: PropTypes.string.isRequired
}

export default SkillModal
