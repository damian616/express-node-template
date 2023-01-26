const express = require('express');
const path = require('path');


const staticFolders = [
  {
    route: '/static',
    folder: 'node_modules/bootstrap/dist/css'
  },
  {
    route: '/static',
    folder: 'node_modules/bootstrap/dist/js'
  },
  {
    route: '/static',
    folder: 'node_modules/jquery/dist'
  }
];

module.exports = (app) => {
  // Static content
  app.use(express.static('public'));
  staticFolders.forEach((folder) => {
    app.use(folder.route, express.static(path.join(__dirname, '../../', folder.folder)));
  });
};