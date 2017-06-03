var express = require('express');
var routePersona = express.Router();

var x = require("../controllers/controllerPersona");

routePersona.route('/data/personasData')
        .get(x.read)
        .post(x.create)

module.exports = routePersona;