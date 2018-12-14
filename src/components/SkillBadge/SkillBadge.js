import React from 'react'
import PropTypes from 'prop-types'
import styles from './SkillBadge.module.scss'
import * as R from 'ramda'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import classnames from 'classnames'

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

const SkillBadge = props => {
    const {
        id,
        name,
        shortName,
        logo,
        onClick
    } = props

    const LogoImage = () => (
        <img
            className={ styles.logo }
            src={ logo.src }
            alt={ logo.label }
        />
    )
    const FallbackImage = () => (
        <span
            className={ styles.fallbackLogo }
        >
            { shortName }
        </span>
    )

    const image = R.ifElse(
        () => !R.isNil(logo.src),
        LogoImage,
        FallbackImage
    )()

    const containerProps = {
        key: id,
        className: classnames(
            globalLocalClassnames('SkillBadge')
        ),
        onClick: _e => onClick(props, _e)
    }

    const itemLabelProps = {
        className: classnames(
            globalLocalClassnames('itemLabel')
        )
    }

    return (
        <div { ...containerProps }>
            <div className={ styles.logoContainer }>
                { image }
            </div>
            <div { ...itemLabelProps }>
                { name }
            </div>
        </div>
    )
}

SkillBadge.propTypes = {
    id: PropTypes.string,
    logo: PropTypes.shape({
        src: PropTypes.string,
        label: PropTypes.string
    }),
    name: PropTypes.string,
    shortName: PropTypes.string,

    // comma seperated string or array
    tags: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    onClick: PropTypes.func
}

export default SkillBadge
