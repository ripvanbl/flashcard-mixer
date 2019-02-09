import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

const enhancers = applyMiddleware(loggerMiddleware);

export const configureStore = (initialState) => {
    return createStore(reducers, initialState, enhancers);
};