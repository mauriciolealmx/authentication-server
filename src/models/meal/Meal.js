const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointSchema = new Schema({
  type: {
    type: String,
    default: 'Point',
    required: true
  },

  coordinates: {
    type: [Number],
    required: true
  }
});

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
    ref: 'user',
    required: true
  },

  geometry: { type: PointSchema, index: '2dsphere' }
});

module.exports = mongoose.model('meal', MealSchema);
