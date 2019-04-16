const { requireAuth } = require('../middlewares/passport');
const getMeal = require('./getMeal');
const getMeals = require('./getMeals');
const createMeal = require('./createMeal');

module.exports = app => {
  /**
   * @route   GET /meals
   * @desc    Get all PrepMeals
   * @access  Private
   */
  app.get('/meals', requireAuth, getMeals);

  /**
   * @route   GET /meals/:id
   * @desc    Get one PrepMeal by id.
   * @access  Private
   */
  app.get('/meals/:id', requireAuth, getMeal);

  /**
   * @route   POST /meals
   * @desc    Create a PrepMeal
   * @access  Private
   */
  app.post('/meals', requireAuth, createMeal);
};
