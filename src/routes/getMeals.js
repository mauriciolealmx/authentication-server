const { getMeals } = require('../querys/Meal.queries');

module.exports = async (req, res) => {
  const meals = await getMeals();
  if (meals) {
    return res.status(200).json(meals);
  }
};
