import React from 'react'
import styles from './Nav.module.scss'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import * as R from 'ramda'
import classnames from 'classnames'
import BurgerMenu from 'react-burger-menu/lib/menus/slide'
import Link from '../Link'
import { ReactComponent as BurgerIcon } from '../../assets/images/burger_menu.svg'

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

class Nav extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // Keeps state in sync with BurgerMenu state
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange = ({ isOpen: menuOpen }) => {
        this.setState({ menuOpen })
    }

    closeMenu = () => {
        this.setState({ menuOpen: false })
    }

    toggleMenu = () => {
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
        } = this.props

        const containerProps = {
            className: classnames(
                globalLocalClassnames('Nav')
            )
        }

        const renderedItems = items.map(this.renderItem)

        return (
            <nav { ...containerProps }>
                <div className={ styles.container}>
                    <div className={ styles.items }>
                        { renderedItems }
                    </div>
                </div>

                <BurgerMenu
                    customBurgerIcon={ <BurgerIcon /> }
                    isOpen={ this.state.menuOpen }
                    width={'60%'}
                    onStateChange={ state => this.handleStateChange(state) }
                    right
                >
                    { renderedItems }
                </BurgerMenu>
            </nav>
        )
    }
}

export default Nav
