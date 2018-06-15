import  { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import quotes from './quotesReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  quotes
});

export default rootReducer;
