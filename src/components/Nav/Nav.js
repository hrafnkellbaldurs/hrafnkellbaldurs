import React from 'react'
import styles from './Nav.module.scss'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import * as R from 'ramda'
import classnames from 'classnames'
import Menu from 'react-burger-menu/lib/menus/slide'
import Link from '../Link'
import { ReactComponent as BurgerIcon } from '../../assets/images/burger_menu.svg'

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

class Nav extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }

        this.handleMenuStateChange = this.handleMenuStateChange.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    // Keeps state in sync with Menu state
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleMenuStateChange({ isOpen: menuOpen }) {
        this.setState({ menuOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    toggleMenu() {
        this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }))
    }

    onItemClick = e => {
        e.preventDefault()
        this.closeMenu()
    }

    renderItem = (item, key) => {
        const className = classnames(
            styles.item,
            { [styles.current]: item.current }
        )

        return (
            <Link
                key={ key }
                className={ className }
                to={ item.href }
                onClick={ this.onItemClick }
                smoothScroll
            >
                { item.text }
            </Link>
        )
    }

    render() {
        const {
            items = [],
            menuOptions: menuOptionsProp = {}
        } = this.props

        const containerProps = {
            className: classnames(
                globalLocalClassnames('Nav')
            )
        }

        const renderedItems = items.map(this.renderItem)

        const menuOptionPropOr = R.partialRight(R.propOr, [menuOptionsProp])
        const menuOptions = {
            width: menuOptionPropOr('60%', 'width'),
            customBurgerIcon: menuOptionPropOr(<BurgerIcon />, 'customBurgerIcon'),
            right: menuOptionsProp.left !== true,
            className: classnames(styles.Menu, menuOptionsProp.className),
            isOpen: this.state.menuOpen,
            onStateChange: this.handleMenuStateChange
        }

        return (
            <nav { ...containerProps }>
                <div className={ styles.container }>
                    <div className={ styles.items }>
                        { renderedItems }
                    </div>
                </div>

                <Menu { ...menuOptions }>
                    { renderedItems }
                </Menu>
            </nav>
        )
    }
}

export default Nav
