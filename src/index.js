import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import Footer from './components/Footer/Footer';
import * as serviceWorker from './serviceWorker';
import reducer from './Store/Reducers/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render([<Provider store={myStore}><App key="1"/></Provider>, <Footer key="2"/>], document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
