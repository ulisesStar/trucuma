var express = require('express');
var routeImagen = express.Router();

var x = require("../controllers/controllerImagen");

routeImagen.route('/data/dataImagen')
        .get(x.read)
        .post(x.create)

module.exports = routeImagen;