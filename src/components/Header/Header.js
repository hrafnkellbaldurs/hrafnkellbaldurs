import React from 'react'
import styles from './Header.module.scss'
import Nav from '../Nav'

class Header extends React.PureComponent {
    render() {
        return (
            <header id="home" className={ styles.Header }>
                <Nav items={ this.props.items } currentItemId={ this.props.currentItemId }></Nav>
            </header>
        )
    }
}

export default Header
