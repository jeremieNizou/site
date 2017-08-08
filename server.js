"use strict";

var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 8080;

app.use("/", express.static(__dirname + "/app/public"));
app.use(morgan('dev'));


require('./server/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
