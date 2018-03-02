import React from 'react';
import { Accounts } from 'meteor/accounts-base';

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
  render() {
    return (
      <div>
        <h1>Your Jobs</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}
