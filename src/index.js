import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'; // Glue for react and redux
import Store from './Store';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root') // and mount it to our #root element
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
