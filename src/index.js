import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { reducer } from "./user/config/redux.config";
import "./SassMixin/init.scss";

const store = createStore(reducer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
