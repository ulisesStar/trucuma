var express = require('express');
var routeImagen = express.Router();

var x = require("../controllers/controllerImagen");

routeImagen.route('/data/dataImagen')
        .get(x.read)
        .post(x.create)

routeImagen.route('/data/dataImagen/:id')
        .get(x.read);

module.exports = routeImagen;
