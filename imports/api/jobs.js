import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';

export const Jobs = new Mongo.Collection('jobs');

if (Meteor.isServer) {
  // Can't use arrow function here as we need access to `this`
  // binding.
  Meteor.publish('jobs', function () {
    // Meteor.userId() as we've used elsewhere won't work here.
    return Jobs.find({ userId: this.userId });
  });
}

Meteor.methods({
  // These two are the same:
  //'jobs.insert': function() {
  'jobs.insert'(title, description, company) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    new SimpleSchema({
      title: {
        type: String
      },
      description: {
        type: String
      },
      company: {
        type: String
      }
    }).validate({ title, description, company });
    Jobs.insert({
      title,
      description,
      company,
      userId: this.userId
    });
  }
});