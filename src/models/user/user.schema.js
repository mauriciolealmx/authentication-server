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
    type: String,
    required: true,
    lowercase: true
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

  geometry: { type: PointSchema, index: '2dsphere' }

  // Maybe:
  // cookin: { type: Boolean, default: false }
});

module.exports = userSchema;
