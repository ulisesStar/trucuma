var db = require('../relations');
var interes = db.interes;

var ex = module.exports = {};

ex.create = function (req, res, next) {

    var data = req.body;
    interes.create(data)
            .then(function () {
                res.status(200).jsonp({msj: 'SUCCESS!'});
            });
};

ex.read = function (req, res, next) {

    var id = req.params.id;

    if (id) {
        interes.findById(id)
                .then(function (modelo) {
                    res.status(200).jsonp(modelo);
                });
    } else {
        interes.findAll()
                .then(function (modelos) {
                    res.status(200).jsonp(modelos);
                });
    }
};
