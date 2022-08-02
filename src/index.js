import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import "./vendor/normalize.css"

import App from "./pages/App";
import { store } from './services/store'


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
