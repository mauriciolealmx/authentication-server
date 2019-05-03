const {
  createMeal,
  getMeal,
  getMeals,
  editMeal,
  getMealsByUser,
  deleteMeal
} = require('./meal.queries');

/**
 * @method GET
 * @route "/meals"
 * @Query [lng, lat, maxDistance]
 */
exports.getMeals = async ({ query }, res) => {
  const meals = await getMeals(query);
  if (meals) {
    return res.status(200).json(meals);
  }
};

/**
 * @method GET
 * @route "/meals/:id"
 */
exports.getMeal = async (req, res) => {
  const { id } = req.params;

  const meal = await getMeal(id);
  if (meal) {
    return res.json(meal);
  } else {
    return res.status(404).json({ error: 'No meal found with that ID' });
  }
};

/**
 * @method GET
 * @route "/meals/user/:id"
 */
exports.getMealsByUserId = async (req, res) => {
  const { id } = req.params;

  const meals = await getMealsByUser(id);
  if (meals) {
    return res.json(meals);
  } else {
    return res
      .status(404)
      .json({ error: `No meals found for user with ID ${id}` });
  }
};

/**
 * @method POST
 * @route "/meals"
 */
exports.createMeal = async (req, res) => {
  const { id } = req.user;
  const { title, description, imageUrl, location: coordinates } = req.body;
  const mealToCreate = {
    user: id,
    title,
    description,
    imageUrl,
    geometry: {
      coordinates
    }
  };

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
  await editMeal(id, req.body);
  res.status(200).json({ success: true });
};

/**
 * @method DELETE
 * @route "/meals/:id"
 */
exports.deleteMeal = async (req, res) => {
  const { id } = req.params;
  const removedMeal = await deleteMeal(id);
  res.status(200).json(removedMeal);
};
