import React, { Component } from 'react';
import styles from '../styles/App.scss';
import AppHeader from './AppHeader';
//import HeaderContainer from '../containers/HeaderContainer';
//import Body from './Body';

export default class App extends Component {
	componentDidMount() {
		
	}

	render() {
		return (
			<div className={styles.container}>
                <AppHeader />
                <div style={{ height: '200px', }}></div>
			</div>
		);
	}
}