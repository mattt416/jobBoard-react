import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Jobs = new Mongo.Collection('jobs');

if (Meteor.isServer) {
  // Can't use arrow function here as we need access to `this`
  // binding.
  Meteor.publish('jobs', function () {
    // Meteor.userId() as we've used elsewhere won't work here.
    return Jobs.find({ userId: this.userId });
  });
}