import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import cardReducer from './reducer/card'

const composeEnhancer = compose();
const rootReducer = combineReducers({
    card: cardReducer
});
const store = createStore(
    composeEnhancer(rootReducer, null)
)
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.querySelector('.root'));