var db = require('../relations');
var modelo = db.obj;

var ex = module.exports = {};

ex.create = function (req, res, next) {

    var data = req.body;
    modelo.create(data)
            .then(function () {
                res.status(200).jsonp({msj: 'SUCCESS!'});
            });
};

ex.read = function (req, res, next) {

    var id = req.params.id;

    if (id) {
        modelo.findById(id)
                .then(function (modelo) {
                    res.status(200).jsonp(modelo);
                });
    } else {
        modelo.findAll()
                .then(function (modelos) {
                    res.status(200).jsonp(modelos);
                });
    }
};