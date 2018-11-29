import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import styles from './Footer.module.scss'
import SocialLinks from '../SocialLinks'
import { ReactComponent as DownArrowIcon } from '../../assets/images/arrow_drop_down.svg'

const Footer = () => {
    return (
        <footer className={ styles.Footer }>
            <div className={ styles.goToTop}>
                <Link to="#home">
                    <DownArrowIcon></DownArrowIcon>
                </Link>
            </div>
            <div className="row">
                <div className="twelve columns">
                    <SocialLinks></SocialLinks>
                </div>
            </div>
        </footer>
    )
}

export default Footer
