import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariantMiddleware())
  );
};
