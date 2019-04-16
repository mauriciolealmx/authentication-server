const { requireAuth, requireSignin } = require('../middlewares/passport');

const getCurrentUser = require('./getCurrentUser');
const { signup, signin } = require('../middlewares/authentication');

module.exports = function(app) {
  app.post('/signin', requireSignin, signin);

  app.post('/signup', signup);

  app.get('/current', requireAuth, getCurrentUser);
};
