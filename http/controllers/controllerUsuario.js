var db = require('../relations');
var usuario = db.usuario;

var ex = module.exports = {};

ex.create = function (req, res, next) {

    var data = req.body;

    usuario.create()
    .then(function () {
        res.status(200).jsonp(req.body);
    });
};

ex.read = function (req, res, next) {

    var id = req.params.id;

    if (id) {
        usuario.findById(id)
                .then(function (usuario) {
                    res.status(200).jsonp(usuario);
                });
    } else {
        usuario.findAll()
                .then(function (usuarios) {
                    res.status(200).jsonp(usuarios);
                });
    }
};
