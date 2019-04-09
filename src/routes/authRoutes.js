const getCurrentUser = require('./getCurrentUser');
const { signup, signin } = require('../middlewares/authentication');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ content: 'Protected content' });
  });

  app.post('/signin', requireSignin, signin);

  app.post('/signup', signup);

  app.get('/current', requireAuth,  getCurrentUser);
};
