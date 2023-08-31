/***********************************
 * // DARRT Framework
 * // root of the service API
 * // 31-08-2023
 ***********************************/

var express = require('express');
var app = express();
var cors = require('cors');
var resources = require('./darrt/resources');
var port = process.env.PORT || 8181;

//support calls from JS in browser
app.use(cors());
app.options('*', cors());

// point to exposed resources for this API
app.use('/', resources);

// start listening for requests
app.listen(port, () =>  console.log(`listening on port ${port}!`));