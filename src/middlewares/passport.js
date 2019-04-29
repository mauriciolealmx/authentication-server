const passport = require('passport');
const { LOCAL, JWT } = require('../services/passport');

const options = { session: false };

exports.requireSignin = passport.authenticate(LOCAL, options);

exports.requireAuth = passport.authenticate(JWT, options);
