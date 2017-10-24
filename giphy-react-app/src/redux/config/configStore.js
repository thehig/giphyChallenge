import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer';
import sagas from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware
];

if (process.env.NODE_ENV === 'dev') {
  const createLogger = require('redux-logger').createLogger;
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  // Webpack hot module reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  // Run sagas
  sagaMiddleware.run(sagas);

  return store;
}
