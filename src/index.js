import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

import store from "./store";
import Home from "./pages/home";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,

  document.getElementById("root")
);
