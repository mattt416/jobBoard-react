import React from 'react';
//import { browserHistory } from 'react-router-dom';

export default class Job extends React.Component {
  onLogout() {
    this.props.history.push('/');
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
