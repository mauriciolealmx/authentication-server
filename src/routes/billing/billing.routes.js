const { requireAuth } = require('../../middlewares/passport');
const { makeCharge } = require('./billing.controllers');

module.exports = app => {
  /**
   * @route   GET /meals
   * @desc    Get all MealPreps
   * @params  lng, lat, and maxDistance can be specified.
   * @access  Private
   */
  app.post('/stripe', requireAuth, makeCharge);
};
