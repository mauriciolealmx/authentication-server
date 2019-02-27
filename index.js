// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// DB Setup
mongoose.connect('mongodb://localhost/auth');

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

require('./router')(app);

// Server Setup
const PORT = process.env.NODE_ENV || 3090;
const server = http.createServer(app);
server.listen(PORT);
console.log('Server listening on: ', PORT);
