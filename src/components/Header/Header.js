import React from 'react'
import styles from './Header.module.scss'
import Nav from '../Nav'

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
                <Nav items={ navItems }></Nav>
            </header>
        )
    }
}

export default Header
