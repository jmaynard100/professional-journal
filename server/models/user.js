//Creates a model of the User which can be used to add users to the database.

// Import the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var userSchema = new Schema({
  _id: { type: String },
  username: { type: String, unique: true },
  firstname: { type: String },
  lastname: { type: String },
  password: { type: String },
  email: { type: String, unique: true },
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;