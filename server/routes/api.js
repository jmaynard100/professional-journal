//Contains all the api calls we plan on using on our Routes.

// Imports all the required dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Journal = require('../models/journal');


/* GET api listing. */
// Get request running on the / path.
router.post('/', (req, res) => {
  
  var newUser = User({
    username: req.body.username,
    password: req.body.password,
  });

  // Saves the user into the database.
  newUser.save(function(err) {
    if (err) {
      res.send({'status':'Error'});
    } else {
      res.send(User);
    }
  });

});
router.get('/create-journal', (req, res) =>{

  var newJournal = Journal({
    journalId: '1' + Math.floor(Date.now()/1000),
    journalName: 'professional',
    date: new Date(),
    userId: '1',
    journalEntry: {
        entryId: '1' + Math.floor(Date.now()/1000),
        content: 'something something something',
        date: new Date(),
        hidden: false,
        deleted: false,
        entryHistory: {
            historyId: '1' + Math.floor(Date.now()/1000),
            date: new Date(),
            content:'something else',
            hidden: false,
            deleted: false,
        }    
    }
  });

  // Saves the journal into the database.
  newJournal.save(function(err) {
    if (err) {
      res.send('Error creating journal');
    } else {
      res.send('Journal created!');
    }
  });
})
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
router.get('/get-journals', (req, res) => {
    // get all the journals
  Journal.find({}, function(err, journals) {
    if (err) {
      res.send('Error getting journals');
    } else {
      // Responds with an object of all the journals
      res.send(journals);
    }    
  });
});

module.exports = router;