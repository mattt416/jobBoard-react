import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"

import Job from '../imports/ui/Job';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';
import Signup from '../imports/ui/Signup';


const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/jobs'];
const history = createHistory();

const routes = (
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/jobs' component={Job} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = history.location.pathname;;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.replace('/jobs');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
