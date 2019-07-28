const jwt = require('jwt-simple');
const User = require('../../models/user/user');
// const config = require('../config');

const tokenForUser = ({ id, name, email }) => {
  const iat = new Date().getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const exp = iat + oneDay;
  // TODO: We really need the complete user during sing in
  // basically the only thing that we should store in the
  // TOKEN is the user's id so we can fetch it from the
  // front.
  const data = { email, exp, iat, id, name, sub: id };
  return jwt.encode(data, 'config.secret');
};

// I wanted to take out the user here. I need a user in redux from the beggining.
exports.signin = (req, res) => {
  // User has already had their email and password authenticated
  // TODO: We getting tons of things that we do not need; Like password.
  res.send({ token: tokenForUser(req.user), user: req.user });
};

exports.signup = (req, res, next) => {
  const { name, password, email } = req.body;

  if (!email || !password || !name) {
    return res
      .status(422)
      .send({ error: 'You must provide name, email, and password' });
  }

  // See if a user with the given email exists
  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      name: { first: name, last: null },
      email,
      password
    });

    user.save((err, createdUser) => {
      if (err) {
        return next(err);
      }

      // Respond to request indicating the user that was created
      const { id, name, email } = createdUser;
      res.json({
        token: tokenForUser(user),
        user: { id, name, email }
      });
    });
  });
};
