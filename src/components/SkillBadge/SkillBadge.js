import React from 'react'
import styles from './SkillBadge.module.scss'
import * as R from 'ramda'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import classnames from 'classnames'

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

const SkillBadge = props => {
    const { id, name, shortName, onClick } = props
    const logo = R.defaultTo({}, props.logo)

    const LogoImage = () => (
        <img
            className={ styles.logo }
            src={ logo.publicURL }
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
        () => !R.isNil(logo.publicURL),
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

export default SkillBadge
