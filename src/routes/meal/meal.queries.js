const Meal = require('../../models/meal/Meal');

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

exports.editMeal = async (_id, userProps) => {
  await Meal.findByIdAndUpdate({ _id }, userProps);
  return Meal.findById(_id);
};