const { createMeal } = require('../querys/Meal.queries');

module.exports = async (req, res) => {
  const { id } = req.user;
  const { title, description, imageUrl } = req.body;
  
  const meal = { user: id, title, description, imageUrl };

  const meal = await createMeal(meal);
  if (meal) {
    res.status(200).json(meal);
  }
};
