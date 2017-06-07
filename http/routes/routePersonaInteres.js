var express = require('express');
var routePersonaInteres = express.Router();

var x = require("../controllers/controllerPersonaInteres");

routePersonaInteres.route('/data/PersonaIntereses')
        .get(x.read)
        .post(x.create)

routePersonaInteres.route('/data/PersonaIntereses/:id')
        .get(x.read);

module.exports = routePersonaInteres;
