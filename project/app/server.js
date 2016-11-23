//dependencies
var express = require('express');

//create an express instance
var app = express();

//set view engine to ejs and default view directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../public/views');

//middleware to define path to public directory
app.use(express.static(__dirname + '/../public'));

//import database
require('./database.js')

//import routes
require('./routes.js')(app);

//export app server
module.exports = app;