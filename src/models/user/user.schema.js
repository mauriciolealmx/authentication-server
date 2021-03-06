const mongoose = require('mongoose');
const { Schema } = mongoose;

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

// Define the schema.
const userSchema = new Schema({
  name: {
    first: { type: String, lowercase: true },
    last: { type: String, lowercase: true }
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  image: {
    large: String,
    medium: String,
    thumbnail: String
  },

  geometry: { type: PointSchema, index: '2dsphere' },

  // Maybe:
  // cookin: { type: Boolean, default: false }

  credits: { type: Number, default: 0 }
});

module.exports = userSchema;
