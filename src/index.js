// Main starting point of the application
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// DB Setup
const MONGO_URI =
  'mongodb+srv://emdbAdmin:emdbAdmin@email-marketing-kcs7f.mongodb.net/address-book?retryWrites=true';
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

app.use(passport.initialize());
require('./services/passport')(passport);

require('./routes/authRoutes')(app);

// Server Setup
const PORT = process.env.NODE_ENV || 3090;
app.listen(PORT, () => {
  console.log('Server listening on: ', PORT);
});
