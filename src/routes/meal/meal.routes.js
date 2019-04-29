const { requireAuth } = require('../../middlewares/passport');
const {
  createMeal,
  getMeal,
  getMeals,
  editMeal,
  getMealsByUserId,
  deleteMeal
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
   * @desc    Get one MealPrep by meal id.
   * @access  Private
   */
  app.get('/meals/:id', requireAuth, getMeal);

  /**
   * @route   GET /meals/user/:id
   * @desc    Get all Meals by user id.
   * @access  Private
   */
  app.get('/meals/user/:id', requireAuth, getMealsByUserId);

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

  /**
   * @route   DELETE /meals/:id
   * @desc    Delete/Remove a MealPrep by id.
   * @access  Private
   */
  app.delete('/meals/:id', requireAuth, deleteMeal);
};
