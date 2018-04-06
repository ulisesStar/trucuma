var db = require('../relations');
var producto = db.producto;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    producto.create(req.body)
    .then(result => res.status(200).jsonp(result))

};


ex.delete = function(req, res, next) {

    producto.findById(req.params.id)
    .then(producto => producto.destroy())


};

ex.update = function(req, res, next) {

    producto.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(result => res.status(200).jsonp(result))
};

ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        producto.findById(id)
        .then(result => res.status(200).jsonp(result))
    } else {
        producto.findAll()
        .then(result => res.status(200).jsonp(result))
    }
};
