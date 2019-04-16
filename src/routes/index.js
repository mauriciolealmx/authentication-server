module.exports = (app) => {
  require('./auth.routes')(app);
  require('./uploadRoutes')(app);
  require('./meal.routes')(app);
}
