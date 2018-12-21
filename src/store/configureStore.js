import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../rootReducer';

export default (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? composeWithDevTools({})
    : compose;

  const enhancers = composeEnhancers(applyMiddleware(thunk));

  return createStore(rootReducer, initialState, enhancers);
};
