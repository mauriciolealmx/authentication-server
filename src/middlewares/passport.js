const passport = require('passport');

const options = { session: false };

exports.requireAuth = passport.authenticate('jwt', options);

exports.requireSignin = passport.authenticate('local', options);
