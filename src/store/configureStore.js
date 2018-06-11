import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariantMiddleware from 'redux-immutable-state-invariant';

export default  (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariantMiddleware)
  );
};
