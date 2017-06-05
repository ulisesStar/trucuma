var express = require('express');
var routeInteres = express.Router();

var x = require("../controllers/controllerInteres");

routeInteres.route('/data/dataInteres')
        .get(x.read)
        .post(x.create)

routeInteres.route('/data/dataInteres/:id')
        .get(x.read);

module.exports = routeInteres;
