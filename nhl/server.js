// Require needed modules
var express = require('express'),
    request = require('request');

// Create an Express application
var app = express();

// Get an instance of the Express Router
var router = express.Router();

// Register router routes
require('./routes')(router, request);

// Prefix routes with /api
app.use('/api', router);

// Set the static files location
app.use(express.static('./public'));

// Start application server
app.listen(8080, '127.0.0.1', function() {
    console.log('Express server started on 127.0.0.1:8080');
});
