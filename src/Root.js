import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { configureStore } from './store';
import { App } from './components/App';
import Home from './Views/Home';

const history = createBrowserHistory();
const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

export { Root }
