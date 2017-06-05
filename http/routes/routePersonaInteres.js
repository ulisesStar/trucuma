var express = require('express');
var routePersonaInteres = express.Router();

var x = require("../controllers/controllerPersonaInteres");

routePersonaInteres.route('/data/dataInteres')
        .get(x.read)
        .post(x.create)

routePersonaInteres.route('/data/dataInteres/:id')
        .get(x.read);

module.exports = routePersonaInteres;
