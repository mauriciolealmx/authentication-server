module.exports = (app) => {
  require('./auth.routes')(app);
  require('./upload.routes')(app);
  require('./meal.routes')(app);
}
