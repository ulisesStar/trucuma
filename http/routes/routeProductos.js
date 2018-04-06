var express = require('express');
var route = express.Router();

var x = require("../controllers/controllerProducto");

route.route('/data/producto')
        .get(x.read)
        .post(x.create);

route.route('/data/producto/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;
