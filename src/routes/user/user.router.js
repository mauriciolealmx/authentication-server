const { index, edit, deleteUser, getUser } = require('./user.controllers');

module.exports = app => {
  /**
   * POST user does signup. Thus,
   * that route exists in auth.routes.
   */

  app.get('/users', index);

  app.get('/users/:id', getUser);
  
  app.put('/users/:id', edit);

  app.delete('/users/:id', deleteUser);
};
