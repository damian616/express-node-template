const express = require('express');
const app = express();
const logWithColor = require('./bin/lib/lib.js')

// Database
const connectDB = require('./bin/database/connection');
connectDB()
    .then(() => { logWithColor('Connection to database established!','low'); })
    .catch(err => { logWithColor(('Error connecting to database: ', err),'high');
});

// Middleware 
require('./middleware')(app, express);

// Routes
const routes = require('./routes/index');
routes(app);


module.exports = app;
logWithColor('main app running', 'low')