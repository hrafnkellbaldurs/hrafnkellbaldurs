import React from 'react'
// import SocialLinks from '../SocialLinks'
// import { ReactComponent as DownArrowIcon } from '../../assets/images/arrow_drop_down_circle.svg'
import styles from './Header.module.scss'

const Header = () => {
    const navItems = [
        {
            current: true,
            href: '#home',
            text: 'Home'
        },
        {
            href: '#about',
            text: 'About'
        },
        {
            href: '#resume',
            text: 'Resume'
        },
        {
            href: '#portfolio',
            text: 'Portfolio'
        }
    ]

    return (
        <header id="home" className={ styles.container }>
            <nav id="nav-wrap">

                <a className={ styles.mobileBtn } href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className={ styles.mobileBtn } href="#" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className={ styles.navItems }>
                    {
                        navItems.map(item => {
                            const className = `${ styles.navItem } ${ item.current ? 'current' : '' }`
                            return (
                                <li key={ item.href } className={ className }>
                                    <a className="smoothscroll" href={ item.href }>{ item.text }</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">

                    <h1 className="responsive-headline">Hi, I'm Hrafnkell Baldursson.</h1>
                    <h3>
                        I'm a <span>front-end developer</span> and <span>graphic design enthusiast</span>.<br />
                        <a className="smoothscroll" href="#about">Scroll down</a>&nbsp;
                        to learn more.
                    </h3>
                    <hr />
                    {/* <SocialLinks /> */}
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    {/* <DownArrowIcon /> */}
                </a>
            </p>
        </header>
    )
}

export default Header
