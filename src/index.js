// Main starting point of the application
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');

// Environment variables.
require('dotenv').config();

const app = express();

// DB Setup
const MONGO_URI = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

app.use(passport.initialize());
require('./services/passport')(passport);

require('./routes')(app);

// Server Setup
const PORT = process.env.NODE_ENV || 3090;
app.listen(PORT, () => {
  console.log('Server listening on: ', PORT);
});

module.exports = app;
