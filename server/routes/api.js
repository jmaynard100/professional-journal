//Contains all the api calls we plan on using on our Routes.

// Imports all the required dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');


/* GET api listing. */
// Get request running on the / path.
router.get('/', (req, res) => {
  
  var newUser = User({
    username: 'starlord55' + Math.floor(Date.now()/1000),
    password: 'password',
  });

  // Saves the user into the database.
  newUser.save(function(err) {
    if (err) {
      res.send('Error creating user');
    } else {
      res.send('User created!');
    }
  });

});
//Get request running on the /get-users path
router.get('/get-users', (req, res) => {
    // get all the users
  User.find({}, function(err, users) {
    if (err) {
      res.send('Error getting users');
    } else {
      // Responds with an object of all the users
      res.send(users);
    }    
  });
});

module.exports = router;