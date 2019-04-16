const { getMeal } = require('../querys/Meal.queries');

module.exports = async (req, res) => {
  const { id } = req.params;
  const meal = await getMeal(id);
  if (meal) {
    return res.json(meal);
  } else {
    return res.status(404).json({ error: 'No meal found with that ID' });
  }
};
