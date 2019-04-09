const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const passport = require('passport');
// const config = require('../config');

// 'local' Strategy for login.
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err, false);
    if (!user) return done(null, user);

    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false);

      return done(null, user);
    });
  });
});

// 'jwt' Strategy for protected content.
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: 'config.secret'
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // Payload.sub is the User id in mongo.
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

// Use strategies.
module.exports = function(passport) {
  passport.use(jwtLogin);
  passport.use(localLogin);
};
