import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import React from 'react';

import { Jobs } from '../api/jobs'

export default class JobsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }
  componentDidMount() {
    this.jobsTracker = Tracker.autorun(() => {
      Meteor.subscribe('jobs');
      const jobs = Jobs.find().fetch();
      this.setState({ jobs });
    });
  }
  componentWillUnmount() {
    this.jobsTracker.stop();
  }
  renderJobsListItems() {
    return this.state.jobs.map((job) => {
      return <p key={job._id}>{job.title}</p>
    });
  }
  render() {
    return (
      <div>
        <p>Jobs List</p>
        <div>
          {this.renderJobsListItems()}
        </div>
      </div>
    );
  }
};