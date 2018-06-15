import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.quotes, action) => {
    switch (action.type){
      case types.LOAD_QUOTES_SUCCESS:
        return action.quotes;      
  
      default:
        return state;
    }
  };
  