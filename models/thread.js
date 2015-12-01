'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jwt = require('jwt-simple');
var moment = require('moment');

var Thread;

var threadSchema = Schema({
  meUser: String,
  xUser: String,
  messages: Array, 
  timeStamp: {type: Date, default: Date.now()}
});





Thread = mongoose.model('Thread', threadSchema);
module.exports = Thread;