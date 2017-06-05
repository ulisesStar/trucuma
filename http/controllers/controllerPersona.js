var db = require('../relations');
var persona = db.persona;
var intereses = db.interes;
var imagen = db.imagen;

var ex = module.exports = {};

ex.create = function (req, res, next) {

    var data = req.body;
    persona.create(data)
            .then(function () {
                res.status(200).jsonp({msj: 'SUCCESS!'});
            });
};

ex.read = function (req, res, next) {

    var id = req.params.id;

    if (id) {
        persona.findById(id, {include: [
                {model: intereses, attributes: {exclude: ['createdAt', 'updatedAt']}},
                {model: imagen, attributes: {exclude: ['createdAt', 'updatedAt']}}
            ]})
                .then(function (persona) {
                    res.status(200).jsonp(persona);
                });
    } else {
        persona.findAll()
                .then(function (personas) {
                    res.status(200).jsonp(personas);
                });
    }
};
