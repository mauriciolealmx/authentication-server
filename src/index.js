// Main starting point of the application
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');

// Environment variables.
require('dotenv').config();

const app = express();

// DB Setup
if (!['test'].includes(process.env.NODE_ENV)) {
  const MONGO_URI = process.env.MONGO_URI;

  mongoose.Promise = global.Promise;
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

let PORT = process.env.PORT || 3090;
if (['test'].includes(process.env.NODE_ENV)) {
  PORT = 5000;
}

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

app.use(passport.initialize());

require('./services/passport').init(passport);

require('./routes')(app);

// Server Setup
app.listen(PORT, () => {
  console.log('Server listening on: ', PORT);
});

module.exports = app;
