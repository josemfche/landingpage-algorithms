import React from "react";
import ReactDOM from "react-dom";
import UsersStore from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <Provider store={UsersStore}>
    <App />
  </Provider>,
  rootElement
);
