'use strict';

var path = require('path');
var fs = require('fs');
var express = require('express');
var reflection = require(path.join(process.cwd(), './lib/reflection'));
var app = module.exports = express();


app.use(function(req, res, next) {
    req.app = app;
    next();
});


// Initializing api routes
var apiRoutesPath = './routes';
var routes = fs.readdirSync(apiRoutesPath).filter(function (fileName) {
    return /.*.js/.test(fileName);
});

for (var i = routes.length; i--;) {
    var routerPath = path.join(process.cwd(), apiRoutesPath, routes[i]);
    require(routerPath)(app, getCtrlInstance(routerPath));
}

function getCtrlInstance(routerPath) {
    var ctrlPath = routerPath.replace('routes', 'controllers');

    var ctrlConstructor = require(ctrlPath);

    var params = reflection.getParamNames(ctrlConstructor).map(function (dep) {
        return require('./helpers/' + dep);
    });

    return construct(ctrlConstructor, params);
}

function construct(constructor, args) {
    function F() {
        constructor.apply(this, args);
    }

    F.prototype = constructor.prototype;
    return new F();
}