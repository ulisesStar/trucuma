
//*-*-*-CONEXION CON SEQUELIZE & MYSQL-*-*-*-*-*-*-*
var conector = require('./connection');

//- Modelos

var persona = require('./db/modeloPersona')(conector);
var obj = require('./db/modeloObj')(conector);
var imagen = require('./db/modeloImagen')(conector);

//- Relations

imagen.belongsTo(persona, {foreignKey: 'imagenId'});

module.exports.persona = persona;
module.exports.obj = obj;
module.exports.imagen = imagen;
