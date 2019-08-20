import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';

import 'antd/dist/antd.css';

import store from './store';
import Home from './pages/home';
import ViewItem from './pages/ViewItem';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollMemory />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id?" component={ViewItem} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
