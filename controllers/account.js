'use strict';

var _ = require('lodash');
var accountHelper;

function AccountController(account) {
    accountHelper = account;
}

AccountController.prototype.create = function (req, res, next) {
    var body = _.pick(req.body, ['username']);

    accountHelper.createUser(body)
        .then(function (user) {
            res.status(201).send(user);
        })
        .fail(next);
};

module.exports = AccountController;