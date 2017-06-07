var express = require('express');
var routeImagen = express.Router();

var x = require("../controllers/controllerImagen");

routeImagen.route('/data/Imagen')
        .get(x.read)
        .post(x.create)

routeImagen.route('/data/Imagen/:id')
        .get(x.read);

module.exports = routeImagen;
