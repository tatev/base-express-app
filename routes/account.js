'use strict';

var Router = require('express').Router;

module.exports = function (app, account) {
    var accountRouter = new Router();

    accountRouter
        .post('/', account.create);

    app.use('/accounts', accountRouter);
};