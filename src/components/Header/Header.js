import React from 'react'
import styles from './Header.module.scss'
import Nav from '../Nav'
import { SECTION_IDS } from '../../constants'

class Header extends React.PureComponent {
    render() {
        return (
            <header id={ SECTION_IDS.HOME } className={ styles.Header }>
                <Nav items={ this.props.items } currentItemId={ this.props.currentItemId }></Nav>
            </header>
        )
    }
}

export default Header
