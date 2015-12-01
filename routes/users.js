'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

// USERS

router.get('/me', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user){
    res.send({
      displayName: user.displayName,
      picture: user.picture
    });
  })
});


///get/all is untested as of 6:40AM ... need to get more logins working
router.get('/all', ensureAuthenticated, function(req, res) {
  User.find({}, function(err, users){
    console.log(users)
    var userNames = users.map(function(item, index, all){
    		return item.username
    res.send({userNames
    	})
    });
  })
});

module.exports = router;
