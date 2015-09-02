'use strict';

var url = require('url');

/**
 * Returns the mongo db config for the staging,
 * testing and production servers
 * @returns {*}
 * @private
 */
function __mongoConfig() {
    return process.env.MONGOLAB_URI;
}

/**
 * Creates a config object dynamically for the application.
 * @returns {*}
 * @private
 */
function __createConfig() {

    var env = process.env.NODE_ENV || 'development';
    var config = require('./config')[env];

    config.db = __mongoConfig() || config.db;
    config.env = env;

    return config;
}

module.exports = __createConfig();