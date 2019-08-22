import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';

import 'antd/dist/antd.css';

import store from './store/store';
import Home from './pages/home';
import itemPage from './pages/itemPage';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ScrollMemory />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={itemPage} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
