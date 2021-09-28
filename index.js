// Modules
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Routes
const routes = require('./routes/routes');

// Socket.io
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

// Connection with MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Using Cors, Morgan and Routes
app.use(cors()); 
app.use(morgan('dev'));
app.use('/', routes);

// Listen on port 3434
http.listen(3434, () => console.log('Backend running on port 3434 🚀...'));