import React from 'react'
import styles from './Header.module.scss'
import Link from '../Link'

const navItems = [
    {
        current: true,
        href: '/#home',
        text: 'Home'
    },
    {
        href: '/#about',
        text: 'About'
    },
    {
        href: '/#resume',
        text: 'Resume'
    },
    {
        href: '/#portfolio',
        text: 'Portfolio'
    }
]
class Header extends React.PureComponent {
    render() {
        return (
            <header id="home" className={ styles.Header }>
                <nav id="nav-wrap">

                    <a className={ styles.mobileBtn } href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className={ styles.mobileBtn } href="#" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className={ styles.navItems }>
                        {
                            navItems.map(item => {
                                const className = `${ styles.navItem } ${ item.current ? 'current' : '' }`
                                return (
                                    <li key={ item.href } className={ className }>
                                        <Link to={ item.href } smoothScroll>{ item.text }</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
