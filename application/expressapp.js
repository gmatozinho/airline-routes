const express = require('express');
const cookieParser = require('cookie-parser');

var routes = require('../routes');
/**
 * Init express api to register new route and find best route
 */
var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/route', routes.route);

module.exports = app
