import  { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import quotes from './quotesReducer';
import underwriters from './underwritersReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  quotes,
  underwriters
});

export default rootReducer;
