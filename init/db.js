'use strict';

/**
 * Loading dependencies 
 */
var fs = require('fs');
var mongoose = require('mongoose');

var dbInitialized = false;

/**
 * Initialize Database connection
 * @param  {Object} config current environment configuration
 */
exports.init = function(config, forceNoDebug){
    //Preventing the module to be initialize more than one time
    if (dbInitialized) {
        return;
    }
    dbInitialized = true;
    
    //Connecting to the database
    mongoose.connect(config.db);

    //Set debug mode for development environment
    if (config.env === 'development' && !forceNoDebug){
        mongoose.set('debug', true);
    }
    

    //Init model schemas
    var modelsPath = process.cwd() + '/models';
    var modelsFiles = fs.readdirSync(modelsPath).filter(function (fileName) {
        return /.*.js/.test(fileName);
    });

    modelsFiles.forEach(function (file) {
        require(modelsPath + '/' + file);
    });
};