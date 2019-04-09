const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = (req, res) => {
  const { id, email } = req.user;
  res.status(200).json({ id, email });
};
