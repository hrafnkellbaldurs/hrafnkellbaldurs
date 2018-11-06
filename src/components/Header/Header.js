import React from 'react'
import { Link } from 'gatsby'
import styles from './Header.module.scss'

class Header extends React.PureComponent {
    render() {
        return (
            <header className={`${ styles.header } home-header`}>
                <div className={styles.headerTextContainer}>
                    <h1>
                        <Link to="/">
                            { this.props.siteTitle }
                        </Link>
                    </h1>
                </div>
            </header>
        )
    }
};

export default Header
