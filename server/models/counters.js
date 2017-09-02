//Creates a model of the User which can be used to add users to the database.

// Import the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var counterSchema = new Schema({
  _id: { type: String,},
  sequence_value: {type: Number},
});

counterSchema.statics.findAndModify = function (query, sort, doc, options, callback) {
  return this.collection.findAndModify(query, sort, doc, options, callback);
};
// the schema is useless so far
// we need to create a model using it
var Counter = mongoose.model('Counters', counterSchema);

// make this available to our users in our Node applications
module.exports = Counter;