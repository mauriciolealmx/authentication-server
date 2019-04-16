const Meal = require('../models/Meal');

export const getMeal = _id => {
  return Meal.findById(id);
};

export const getMeals = () => {
  return Meal.find({});
};
