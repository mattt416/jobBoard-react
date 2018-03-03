import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"

import Job from '../ui/Job';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';
import Signup from '../ui/Signup';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/jobs'];
const history = createHistory();

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
      history.replace('/jobs');
  } else if (isAuthenticatedPage && !isAuthenticated) {
      history.replace('/');
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/jobs' component={Job} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)