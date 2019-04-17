const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },

  description: {
    type: String,
    required: true
  },

  imageUrl: String,

  title: {
    type: String,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = mongoose.model('meal', MealSchema);
