var express = require('express');
var routeInteres = express.Router();

var x = require("../controllers/controllerInteres");

routeInteres.route('/data/interes')
        .get(x.read)
        .post(x.create)

routeInteres.route('/data/interes/:id')
        .get(x.read);

module.exports = routeInteres;
