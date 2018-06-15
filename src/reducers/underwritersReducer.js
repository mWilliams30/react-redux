import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.underwriters, action) => {
    switch (action.type){
      case types.LOAD_UNDERWRITERS_SUCCESS:
        return action.underwriters;      
  
      default:
        return state;
    }
  };
  