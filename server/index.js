const fs = require('fs');
const path = require('path');
const keystone = require('keystone');

fs.readdirSync(path.resolve(__dirname, './keystone/models')).forEach(file => {
  require(path.resolve(__dirname, './keystone/models', file));
});

require('dotenv').config();
require('newrelic');

keystone.init(require('../config/keystone.config'));
keystone.set('routes', require('./routes'));

keystone.start();
