
//*-*-*-CONEXION CON SEQUELIZE & MYSQL-*-*-*-*-*-*-*
var conector = require('./connection');

//- Modelos

var usuario = require('./db/modeloUsuario')(conector);
var imagenes = require('./db/modeloImagenes')(conector);
var productos = require('./db/modeloProducto')(conector);

//- Relations

// servicios.hasMany(imagenes, {foreignKey: 'IdServicio'});
// imagenes.belongsTo(servicios, {foreignKey: 'IdServicio'});
//
// foto.belongsTo(abogados, {foreignKey: 'IdAbogado'});
// abogados.hasOne(foto, {foreignKey: 'IdAbogado'});


module.exports.usuario = usuario;
module.exports.productos = productos;
module.exports.imagenes = imagenes;
