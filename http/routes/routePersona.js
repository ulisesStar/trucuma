var express = require('express');
var routePersona = express.Router();

var x = require("../controllers/controllerPersona");

routePersona.route('/data/personas')
        .get(x.read)
        .post(x.create);

routePersona.route('/data/personas/:id')
        .get(x.read);

module.exports = routePersona;
