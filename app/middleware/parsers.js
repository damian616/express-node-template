const express = require('express');
const bodyParser = require("body-parser");

module.exports = (app) => {
    // Parsers
    app.use(bodyParser.urlencoded({ extended : true}));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};