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
            <div className={ styles.goToTop }>
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
            <div className="row">
                <span className="icon-licence">
                    Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
