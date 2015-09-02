'use strict';

var mongoose = require('mongoose-q')(require('mongoose'));
var User = mongoose.model('User');

exports.createUser = function (data) {
    var user = new User(data);
    return user.saveQ();
};