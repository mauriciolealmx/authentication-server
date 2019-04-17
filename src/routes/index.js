module.exports = app => {
  require('./auth/auth.routes')(app);

  require('./meal/meal.routes')(app);

  require('./upload/upload.routes')(app);

  require('./user/user.router')(app);
};
