import React from 'react';
import ReactDOM from 'react-dom';
import Test from "./Test";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { reducer } from "./config/redux.config";
import "./SassMixin/init.scss"

const store = createStore(reducer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Test/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
