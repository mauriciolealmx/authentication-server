const { requireSignin } = require('../middlewares/passport');
const { signup, signin } = require('../middlewares/authentication');

module.exports = function(app) {
  app.post('/signin', requireSignin, signin);

  app.post('/signup', signup);
};
