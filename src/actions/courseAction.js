import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return{type: types.LOAD_COURSES_SUCESS, courses};
}

export function loadCourses(){
  return function(dispatch){
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  }
}