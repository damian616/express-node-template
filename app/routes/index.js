// routes/index.js
const indexRoutes = require('./home');
const configRoutes = require('./api'); //make sense! -- requires api file which targets / and hanldes /products

module.exports = (app) => {
  app.use('/', indexRoutes);
  app.use('/', configRoutes);
};