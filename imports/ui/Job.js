import { Meteor } from 'meteor/meteor';
import React from 'react';

import { Jobs } from '../api/jobs';
import PrivateHeader from './PrivateHeader';
import JobsList from './JobsList';
import AddJob from './AddJob';

export default class Job extends React.Component {
  componentDidMount() {
    // When a user logs out, this code below prevents them from hitting the
    // browser's back button and going back to jobs page.
    if (!Meteor.userId()) {
      this.props.history.replace('/');
    }
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Your Jobs" />
        <JobsList />
        <AddJob />
      </div>
    );
  }
}
