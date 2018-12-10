import React from 'react'
import Link from '../Link'
import styles from './Footer.module.scss'
import SocialLinks from '../SocialLinks'
import { ReactComponent as DownArrowIcon } from '../../assets/images/arrow_drop_down.svg'
import classnames from 'classnames'
import { createHashHref } from '../../scripts/utils'
import { SECTION_IDS } from '../../constants'

const Footer = () => {
    const footerContentClassnames = classnames(
        'twelve',
        'columns',
        styles.contentContainer
    )

    const homeSectionHref = createHashHref(SECTION_IDS.HOME)

    return (
        <footer className={ styles.Footer }>
            <div className={ styles.goToTop}>
                <Link to={ homeSectionHref } smoothScroll>
                    <DownArrowIcon></DownArrowIcon>
                </Link>
            </div>
            <div className="row">
                <div className={ footerContentClassnames }>
                    <div className={ styles.socialLinksContainer }>
                        <SocialLinks></SocialLinks>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
