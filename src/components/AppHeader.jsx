import React, { Component } from 'react';
import styles from '../styles/AppHeader.scss';

export default class AppHeader extends Component {

	render() {
		return (
			<header className={ styles.container }>
                <nav className={ styles.navbar }>
                    <ul className={ styles.list }>
                        <li className={ styles.item }>Home</li>
                        <li className={ styles.item }>About</li>
                    </ul>
                </nav>
			</header>
		);
	}
}