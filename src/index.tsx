import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from "react-router-dom";

import "./vendor/normalize.css"

import App from "./pages/App";
import  store  from './services/store'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
