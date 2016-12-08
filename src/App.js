import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		var config = {
			apiKey: 'AIzaSyDUUQcGKNRvbGb1PQ_SECi-smm6scXy2vs',
			authDomain: 'manager-e0b4e.firebaseapp.com',
			databaseURL: 'https://manager-e0b4e.firebaseio.com',
			storageBucket: 'manager-e0b4e.appspot.com',
			messagingSenderId: '687646579846'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
