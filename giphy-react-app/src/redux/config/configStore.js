import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [
  thunk,
];

if (process.env.NODE_ENV === 'dev') {
  const createLogger = require('redux-logger').createLogger;
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./rootReducer', () => {
  //     const nextRootReducer = require('./rootReducer').default; // eslint-disable-line
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  return store;
}
