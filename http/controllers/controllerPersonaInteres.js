var db = require('../relations');
var personainteres = db.personainteres;

var ex = module.exports = {};

ex.create = function (req, res, next) {

    var data = req.body;
    personainteres.create(data)
            .then(function () {
                res.status(200).jsonp({msj: 'SUCCESS!'});
            });
};

ex.read = function (req, res, next) {

    var id = req.params.id;

    if (id) {
        personainteres.findById(id)
                .then(function (persona) {
                    res.status(200).jsonp(persona);
                });
    } else {
        personainteres.findAll()
                .then(function (personas) {
                    res.status(200).jsonp(personas);
                });
    }
};
