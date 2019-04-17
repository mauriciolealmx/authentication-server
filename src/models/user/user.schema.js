const mongoose = require('mongoose');
const { Schema } = mongoose;

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
  }

  // Maybe:
  // cookin: { type: Boolean, default: false }
});

module.exports = userSchema;
