// middleware/index.js
const viewEngine = require('./view-engine');
const parsers = require('./parsers');
const static = require('./static');


module.exports = (app) => {
  viewEngine(app);
  parsers(app);
  static(app);
};