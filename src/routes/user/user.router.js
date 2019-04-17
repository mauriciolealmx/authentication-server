const { index, edit, deleteUser } = require('./user.controllers');

module.exports = app => {
  /**
   * POST user does signup. Thus,
   * that route exists in auth.routes.
   */

  app.get('/users', index)
  
  app.put('/users/:id', edit);

  app.delete('/users/:id', deleteUser);

};
