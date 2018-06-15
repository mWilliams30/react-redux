import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/containers/CoursesPage";
import AdminPage from "./components/admin/AdminPage";
import ManageCoursePage from './components/course/ManageCoursePage';
import QuotesPage from './components/containers/QuotesPage';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={QuotesPage} />
      <Route path="about" component={AboutPage} />
      <Route path="courses" component={CoursesPage} />
      <Route path="course/:id" component={ManageCoursePage} />
      <Route path="course" component={ManageCoursePage} />      
      <Route path="admin" component={AdminPage} />
      <Route path="quotes" component={QuotesPage} />
    </Route>
);
