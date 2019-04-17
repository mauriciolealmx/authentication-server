const { edit } = require('./user.controllers');

module.exports = app => {
  app.put('/users/:id', edit);
};
