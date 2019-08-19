import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import 'antd/dist/antd.css';

import store from "./store";
import ItemList from "./blocks/ItemList";

ReactDOM.render(
  <Provider store={store}>
    <ItemList />
  </Provider>,

  document.getElementById("root")
);
