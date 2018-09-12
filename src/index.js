import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import CombineReducers from './Components/CombineReducers';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();

const store = createStore(
    CombineReducers,
    applyMiddleware(thunkMiddleware, promise, logger)
);

let rootElement = document.getElementById('root');
    ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    rootElement
);
registerServiceWorker();
