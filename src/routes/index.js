module.exports = (app) => {
  require('./authRoutes')(app);
  require('./uploadRoutes')(app);
  require('./meal.routes')(app);
}
