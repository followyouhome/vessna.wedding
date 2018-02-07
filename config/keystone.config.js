const pkg = require('../package.json');
const path = require('path');
const config = require('../config');

module.exports = {
  'name': config.title,
  'favicon': '../public/logo-48.png',
  'mongo': 'mongodb://localhost:27017/' + pkg.name,
  'updates': path.resolve(__dirname, '../server/keystone/updates'),
  'auto update': true,
  'port': config.port,
  'ssl port': 3001,
  'ssl': 'force',
  'session': true,
  'session store': 'mongo',
  'signin url': '/user/login',
  'signin redirect': '/user/profile',
  'signout url': '/user/logout',
  'signout redirect': '/',
  'auth': true,
  'user model': 'user',
  'cookie secret': '24634sdfhsdfgh346y34',
  'logger options': {
    skip: (req, res) => res.statusCode < 400
  },
    letsencrypt: (process.env.NODE_ENV === 'production') && {
    email: 'vessnaws@gmail.com',
    domains: ['vessna.wedding', 'local.vessna.wedding'],
    register: true,
    tos: true,
  },
};
