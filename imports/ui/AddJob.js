import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class AddJob extends React.Component {
  onSubmit(e) {
    const title = this.refs.title.value.trim();
    const description = this.refs.description.value.trim();
    const company = this.refs.company.value.trim();

    e.preventDefault();

    if (title && description && company) {
      Meteor.call('jobs.insert', title, description, company);
      this.refs.title.value = '';
      this.refs.description.value = '';
      this.refs.company.value = '';
    }
  }
  render() {
    return (
      <div>
        <p>Add Job</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <p><input type="text" ref="title" placeholder="Title" /></p>
          <p><textarea ref="description" placeholder="Description"></textarea></p>
          <p><input type="text" ref="company" placeholder="Company" /></p>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
