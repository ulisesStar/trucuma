var express = require('express');
var routeUsuario = express.Router();

var x = require("../controllers/controllerPersona");

routeUsuario.route('/data/usuario')
        .get(x.read)
        .post(x.create);

routeUsuario.route('/data/usuario/:id')
        .get(x.read);

module.exports = routeUsuario;
