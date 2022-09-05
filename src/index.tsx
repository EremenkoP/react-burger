import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from "react-router-dom";

import "./vendor/normalize.css"

import App from "./pages/App";
import  store  from './services/store'

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
