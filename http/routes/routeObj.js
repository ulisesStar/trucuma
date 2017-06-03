var express = require('express');
var routeObj = express.Router();

var x = require("../controllers/controllerObj");

routeObj.route('/data/dataObj')
        .get(x.read)
        .post(x.create)

module.exports = routeObj;