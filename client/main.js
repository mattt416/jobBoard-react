import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Job from '../imports/ui/Job';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';
import Signup from '../imports/ui/Signup';

const routes = (
  <Router>
    <div>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/jobs' component={Job} />
        <Route path='/signup' component={Signup} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
