const { requireSignin } = require('../../middlewares/passport');
const { signup, signin } = require('./auth.controllers');

module.exports = function(app) {
  /**
   * @route   POST /signin
   * @desc    Signs in user with email and password
   * @access  Private
   */
  app.post('/signin', requireSignin, signin);

  /**
   * @route   POST /signup
   * @desc    Creates a user account.
   * @access  Public
   */
  app.post('/signup', signup);
};
