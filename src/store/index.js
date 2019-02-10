import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

const enhancers = applyMiddleware(
  promiseMiddleware, 
  thunkMiddleware,
  loggerMiddleware
);

export const configureStore = (initialState) => {
    return createStore(reducers, initialState, enhancers);
};