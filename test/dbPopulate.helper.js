const mongoose = require('mongoose');
const meals = require('../dummyData/meals/meals');
const users = require('../dummyData/users/users');

const Meal = mongoose.model('meal');
const User = mongoose.model('user');

exports.populateMeals = async () => {
  return Meal.insertMany(meals);
};

exports.populateUsers = () => {
  return User.insertMany(users);
};
