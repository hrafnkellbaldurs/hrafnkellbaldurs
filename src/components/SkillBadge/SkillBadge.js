import React from 'react'
import styles from './SkillBadge.module.scss'
import * as R from 'ramda'

const SkillBadge = ({ id, logo = {}, name, shortName }) => {
    logo = R.defaultTo({}, logo)
    
    const LogoImage = () => <img className={ styles.itemLogo } src={ logo.publicURL }/>
    const FallbackImage = () => <span className={ styles.fallbackLogo }>{ shortName } </span>

    const image = R.ifElse(
        () => !R.isNil(logo.publicURL),
        LogoImage,
        FallbackImage
    )()
    
    return (
        <div className={ styles.container }>
            { image }
            <span className={ styles.itemLabel }>
                { name }
            </span>
        </div>
    )
}

export default SkillBadge
