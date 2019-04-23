const { createMeal, getMeal, getMeals, editMeal } = require('./meal.queries');
exports.getMeal = async (req, res) => {
  const { id } = req.params;

  const meal = await getMeal(id);
  if (meal) {
    return res.json(meal);
  } else {
    return res.status(404).json({ error: 'No meal found with that ID' });
  }
};

exports.getMeals = async (req, res) => {
  const meals = await getMeals();
  if (meals) {
    return res.status(200).json(meals);
  }
};

/**
 * @method POST
 * @route "/meals"
 */
exports.createMeal = async (req, res) => {
  const { id } = req.user;
  const { title, description, imageUrl } = req.body;
  const mealToCreate = { user: id, title, description, imageUrl };

  const meal = await createMeal(mealToCreate);
  if (meal) {
    res.status(200).json(meal);
  }
};

/**
 * @method PATCH
 * @route "/meals/:id"
 */
exports.editMeal = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await editMeal(id, req.body);
  res.status(200).json({ success: true });
};
