const Meal = require('../models/Meal');

exports.getMeal = id => {
  return Meal.findById(id);
};

exports.getMeals = () => {
  return Meal.find({});
};

exports.createMeal = meal => {
  const newMeal = new Meal(meal);
  return newMeal.save();
};
