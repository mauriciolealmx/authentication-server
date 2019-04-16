const Meal = require('../models/Meal');

exports.getMeal = _id => {
  return Meal.findById(id);
};

exports.getMeals = () => {
  return Meal.find({});
};
