'use strict';

module.exports = {
    development: {
        db: 'mongodb://localhost/makeMyDay',
        host: 'http://localhost:3000',
        apn: {
            cert: 'MakeMyDayPushDevCert.pem',
            key: 'MakeMyDayPushDevKey.pem.pem',
            passphrase: 'H6&662OK38hhA'
        }
    },

    staging: {
        db: 'mongodb://localhost/makeMyDay',
        host: 'http://makemyday-dev.herokuapp.com',
        apn: {
            cert: 'MakeMyDayPushDevCert.pem',
            key: 'MakeMyDayPushDevKey.pem.pem',
            passphrase: 'H6&662OK38hhA'
        }
    },

    production: {
        db: 'mongodb://localhost/makeMyDay',
        host: 'http://localhost:3000',
        apn: {
            cert: 'MakeMyDayPushDevCert.pem',
            key: 'MakeMyDayPushDevKey.pem.pem',
            passphrase: 'H6&662OK38hhA'
        }
    }
};
