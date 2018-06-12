import * as types from './../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type){
    case types.LOAD_COURSES_SUCESS:
      return action.courses;
    default:
      return state;
  }
};
