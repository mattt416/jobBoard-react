import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Jobs } from '../api/jobs';
import JobsList from './JobsList.js';

export default class Job extends React.Component {
  componentDidMount() {
    // When a user logs out, this code below prevents them from hitting the
    // browser's back button and going back to jobs page.
    if (!Meteor.userId()) {
      this.props.history.replace('/');
    }
  }
  onLogout() {
    Accounts.logout();
  }
  onSubmit(e) {
    const title = this.refs.title.value.trim();

    e.preventDefault();

    if (title) {
      Meteor.call('jobs.insert', title);
      this.refs.title.value = '';
    }
  }
  render() {
    return (
      <div>
        <h1>Your Jobs</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        <JobsList />
        <p>Add Job</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="title" placeholder="title" />
          <button>Add Job</button>
        </form>
      </div>
    );
  }
}
