import React from 'react'
import styles from './Nav.module.scss'
import { createGlobalLocalClassnames, isHome } from '../../scripts/utils'
import * as R from 'ramda'
import classnames from 'classnames'
import NavMenu from 'react-burger-menu/lib/menus/slide'
import Link from '../Link'
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger_menu.svg'
import { connect, actions } from '../../store'

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

class Nav extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleMenuStateChange = this.handleMenuStateChange.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    // Keeps state in sync with NavMenu state
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleMenuStateChange({ isOpen: menuOpen }) {
        actions.setNavMenuOpen(menuOpen)
    }

    closeMenu() {
        actions.setNavMenuOpen(false)
    }

    toggleMenu() {
        actions.setNavMenuOpen(!this.props.menuOpen)
    }

    onItemClick = e => {
        if (isHome()) {
            e.preventDefault()
        }
        this.closeMenu()
    }

    renderNavMenuItem = (item, i) => {
        return this.renderItem({
            ...item,
            className: classnames('bm-item', styles.item)
        })
    }

    renderNavItem = (item, i) => {
        return this.renderItem({
            ...item,
            className: styles.item
        })
    }

    renderItem = item => {
        const currentItemId = this.props.currentItemId

        const getCurrentClassName = () => ({
            className: classnames({
                [item.className]: true,
                [styles.current]: item.id === currentItemId
            })
        })

        return (
            <Link
                key={ item.id }
                getProps={ getCurrentClassName }
                className={ item.className }
                activeClassName={ styles.current }
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
            menuOptions: menuOptionsProp = {},
            menuOpen
        } = this.props

        const containerProps = {
            className: classnames(
                globalLocalClassnames('Nav')
            )
        }

        const menuOptionPropOr = R.partialRight(R.propOr, [menuOptionsProp])
        const NavMenuClassname = 'NavMenu'
        const menuOptions = {
            width: menuOptionPropOr('60%', 'width'),
            customBurgerIcon: menuOptionPropOr(<BurgerIcon />, 'customBurgerIcon'),
            right: menuOptionsProp.left !== true,
            className: classnames(
                globalLocalClassnames(NavMenuClassname),
                menuOptionsProp.className
            ),
            isOpen: menuOpen,
            onStateChange: this.handleMenuStateChange,
            bodyClassName: menuOptionPropOr(`${ NavMenuClassname }--open__Body`, 'bodyClassName')
        }

        return (
            <nav { ...containerProps }>
                <div className={ styles.container }>
                    <div className={ styles.items }>
                        { items.map(this.renderNavItem) }
                    </div>
                </div>

                <NavMenu { ...menuOptions }>
                    { items.map(this.renderNavMenuItem) }
                </NavMenu>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    currentItemId: state.currentNavItemId,
    menuOpen: state.navMenuOpen,
    items: state.navItems
})

export default connect(mapStateToProps)(Nav)
