import React from 'react'
import Link from '../Link'
import styles from './Footer.module.scss'
import SocialLinks from '../SocialLinks'
import { ReactComponent as DownArrowIcon } from '../../assets/images/arrow_drop_down.svg'
import classnames from 'classnames'

const Footer = () => {
    const footerContentClassnames = classnames(
        'twelve',
        'columns',
        styles.contentContainer
    )

    return (
        <footer className={ styles.Footer }>
            <div className={ styles.goToTop}>
                <Link to="/#home" smoothScroll>
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
