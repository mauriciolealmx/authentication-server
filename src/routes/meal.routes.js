const { requireAuth } = require('../middlewares/passport');
const {
  createMeal,
  getMeal,
  getMeals
} = require('../controllers/meal.controllers');

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
