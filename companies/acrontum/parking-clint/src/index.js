import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainApp from './components/main-app';
import { Provider } from 'react-redux';
import defaultState from './redux/stores/default-state';
import configureStore from './redux/stores/configure-store';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(defaultState);

ReactDOM.render(
    <Provider store={store}>
        <MainApp />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
