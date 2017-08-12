const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');


/* GET api listing. */
router.get('/', (req, res) => {
  
  var newUser = User({
    username: 'starlord55' + Math.floor(Date.now()/1000),
    password: 'password',
  });

  // save the user
  newUser.save(function(err) {
    if (err) {
      res.send('Error creating user');
    } else {
      res.send('User created!');
    }
  });

});
router.get('/get-users', (req, res) => {
    // get all the users
  User.find({}, function(err, users) {
    if (err) {
      res.send('Error getting users');
    } else {
      // object of all the users
      res.send(users);
    }    
  });
});

module.exports = router;