//Contains all the api calls we plan on using on our Routes.

// Imports all the required dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Counters = require('../models/counters');
const User = require('../models/user');
const Journal = require('../models/journal');

/*Function designed to increment the id of each member of the database by 1 every time a new one 
  is created.*/
function getNextSequenceValue(sequenceName) {
  return new Promise(function(resolve, reject) {
    var sequenceDocument = Counters.findByIdAndUpdate (
      sequenceName,
      {$inc:{sequence_value:1}},
      {upsert:true, new:true},
      function(err, result) {
        if(err) {
          console.log("error");
          reject(Error("shit's broken"));
        } else {
          console.log("hello");
          console.log(result);
          resolve(result.sequence_value);
        }
      }
    );
  });
}

/* GET api listing. */
// Get request running on the / path.
router.get('/', (req, res) => {
  var seq = getNextSequenceValue("userId").then(function(seq){
    var newUser = User({
      _id: seq,
      username: "jmaynard",
      firstname: "Joshua",
      lastname: "Maynard",
      password: "password",
      email: "jmaynard100@gmail.com"
    });

    // Saves the user into the database.
    newUser.save(function(err) {
      if (err) {
        res.send({'status':'Error'});
      } else {
        res.send({'status':'Success', 'user': newUser});
      }
    });
  });
});

router.post('/create-user', (req, res) =>{
  var seq = getNextSequenceValue("userId").then(function(seq){
    var newUser = User({
      _id: seq,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    // Saves the journal into the database.
    newUser.save(function(err) {
      if (err) {
        res.send({'status': 'error'});
      } else {
        res.send({'status': 'success', 'user': newUser});
      }
    });
  });
});

/*Post request running on the create-journals path. Creates a journal in the database using
  the journal object passed in the body*/
router.post('/create-journal', (req, res) =>{
  var seq = getNextSequenceValue("journalId").then(function(seq){
    var newJournal = Journal({
      _id: seq,
      journalName: req.body.journalName,
      date: new Date(),
      userId: req.body.userId,
      journalSummary: req.body.journalSummary,
      journalEntry: req.body.journalEntry
    });

    // Saves the journal into the database.
    newJournal.save(function(err) {
      if (err) {
        res.send({'status': 'error'});
      } else {
        res.send({'status': 'success', 'journal': newJournal});
      }
    });
  });
});


//Get request running on the /get-users path
router.get('/get-users', (req, res) => {
    // get the user who logged in.
  User.findOne({ "username": req.query.username, "password": req.query.password }, function(err, user) {
    if (err) {
      res.send({'status': 'failed'});
    } else {
      // Responds with the correct user
      res.send(user);
    }    
  });
});
router.get('/get-journals', (req, res) => {
    // get all the journals
  Journal.find({ "userId": req.query.userId }, function(err, journals) {
    if (err) {
      res.send('Error getting journals');
    } else {
      // Responds with an object of all the journals
      res.send(journals);
    }    
  });
});

router.post('/update-journal', (req, res) =>{
  Journal.findByIdAndUpdate(req.body._id, req.body, {}, function(err, journal) {
    if (err) {
      res.send({'status': 'error'});
    } else {
      res.send({'status': 'success', 'journal': journal});
    }    
  });
});


module.exports = router;