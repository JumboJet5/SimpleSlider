import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './css/index.css';
import App from './App';
import configureStore from './store/createStore';
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
