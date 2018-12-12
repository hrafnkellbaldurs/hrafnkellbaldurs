import React from 'react'
import styles from './Nav.module.scss'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import * as R from 'ramda'
import classnames from 'classnames'
import NavMenu from 'react-burger-menu/lib/menus/slide'
import Link from '../Link'
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger_menu.svg'
import { SECTION_IDS } from '../../constants'

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

    // Keeps state in sync with NavMenu state
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

        const getCurrentClassName = ({ href = '', location = {} }) => {
            // const key = R.pipe(R.split('#'), R.last)(href)
            // const linkHrefHash = `#${ key }`
            // const locationHash = location.hash

            // const noHash = locationHash === ''
            // const isHome = item.id === SECTION_IDS.HOME
            // const isCurrentHash = linkHrefHash === locationHash
            const isCurrentItemId = item.id === currentItemId

            const isCurrent = isCurrentItemId

            return {
                className: classnames({
                    [item.className]: true,
                    [styles.current]: isCurrent
                })
            }
        }

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
            currentItemId,
            menuOptions: menuOptionsProp = {}
        } = this.props

        const containerProps = {
            className: classnames(
                globalLocalClassnames('Nav')
            )
        }

        const menuOptionPropOr = R.partialRight(R.propOr, [menuOptionsProp])
        const menuOptions = {
            width: menuOptionPropOr('60%', 'width'),
            customBurgerIcon: menuOptionPropOr(<BurgerIcon />, 'customBurgerIcon'),
            right: menuOptionsProp.left !== true,
            className: classnames(styles.NavMenu, menuOptionsProp.className),
            isOpen: this.state.menuOpen,
            onStateChange: this.handleMenuStateChange
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

export default Nav
