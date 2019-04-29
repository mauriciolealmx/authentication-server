const { requireAuth } = require('../../middlewares/passport');
const {
  createMeal,
  getMeal,
  getMeals,
  editMeal
} = require('./meal.controllers');

module.exports = app => {
  /**
   * @route   GET /meals
   * @desc    Get all MealPreps
   * @params lng, lat, and maxDistance can be specified.
   * @access  Private
   */
  app.get('/meals', requireAuth, getMeals);

  /**
   * @route   GET /meals/:id
   * @desc    Get one MealPrep by id.
   * @access  Private
   */
  app.get('/meals/:id', requireAuth, getMeal);

  /**
   * @route   POST /meals
   * @desc    Create a MealPrep
   * @access  Private
   */
  app.post('/meals', requireAuth, createMeal);

  /**
   * @route   PUT /meals/:id
   * @desc    Edit/Update a MealPrep
   * @access  Private
   */
  app.patch('/meals/:id', requireAuth, editMeal);
};
