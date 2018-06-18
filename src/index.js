import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import  routes from './routes';
import  './styles/styles.css';
import  './Content/branding-v1.0.0/less/frontend-light.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Content/quote-underwriter-selection.css';
import configureStore from './store/configureStore';
import {Provider}  from 'react-redux';
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import {loadQuotes} from "./actions/quoteActions";
import {loadUnderwriters} from "./actions/underwriterActions";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadQuotes());
store.dispatch(loadUnderwriters());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);


