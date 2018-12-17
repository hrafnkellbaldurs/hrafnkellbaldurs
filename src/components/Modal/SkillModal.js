import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import styles from './SkillModal.scss'
import SkillLevelBanner from '../SkillLevelBanner'
import * as R from 'ramda'
import Link from '../Link'
import { ReactComponent as LinkIcon } from '../../assets/icons/link.svg'

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
        logo,
        rating,
        link
    } = content

    const skillLevelBannerProps = R.pickAll([
        'skillLevel',
        'skillLevelText',
        'startDate',
        'endDate'
    ], content)
    skillLevelBannerProps.borderPosition = 'bottom'

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
            <Link to={link} className="homepage-link button button-small icon-right">
                <span>Open homepage</span>
                <LinkIcon />
            </Link>
            <SkillLevelBanner { ...skillLevelBannerProps } />
        </div>
    )
}

const skillContentShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
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
