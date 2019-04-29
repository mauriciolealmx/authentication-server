const Meal = require('../../models/meal/Meal');

const MAX_DISTANCE = 2000;
const MIN_DISTANCE = 0;

exports.getMeal = id => {
  return Meal.findById(id);
};

exports.getMealsByUser = id => {
  return Meal.find({ user: id });
};

/**
 * @description Get all meals or sorted by distance
 * if query string exists.
 */
exports.getMeals = async ({ lng, lat, maxDistance }) => {
  const $maxDistance = Number(maxDistance) || MAX_DISTANCE;
  const query = {};
  if (lng && lat) {
    query.geometry = {
      $near: {
        $maxDistance,
        $minDistance: MIN_DISTANCE,
        $geometry: { type: 'Point', coordinates: [Number(lng), Number(lat)] }
      }
    };
  }

  const meals = await Meal.find(query);
  return meals;
};

exports.createMeal = meal => {
  const newMeal = new Meal(meal);
  return newMeal.save();
};

exports.editMeal = async (_id, userProps) => {
  await Meal.findByIdAndUpdate({ _id }, userProps);
  return Meal.findById(_id);
};

exports.deleteMeal = _id => Meal.findByIdAndDelete(_id);
