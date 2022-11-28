import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { batchedSubscribe } from "redux-batched-subscribe";
import { debounce } from "lodash";
import thunk from 'redux-thunk';
import session from './session';
import errors from './errors';
import { entitiesReducer } from './entities';
import uiReducer from './ui';

const rootReducer = combineReducers({
  session,
  errors,
  entities: entitiesReducer,
  ui: uiReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;


