
//*-*-*-CONEXION CON SEQUELIZE & MYSQL-*-*-*-*-*-*-*
var conector = require('./connection');

//- Modelos

var persona = require('./db/modeloPersona')(conector);
var imagen = require('./db/modeloImagen')(conector);
var interes = require('./db/modeloInteres')(conector);
var personainteres = require('./db/modeloPersonaInteres')(conector);
var usuario = require('./db/modeloUsuario')(conector);

//- Relations

persona.hasMany(imagen, {foreignKey: 'IdPersona', targetKey: 'id'});

interes.belongsToMany(persona, {through: personainteres, foreignKey: 'IdInteres'});
persona.belongsToMany(interes, {through: personainteres, foreignKey: 'IdPersona'});

module.exports.persona = persona;
module.exports.imagen = imagen;
module.exports.interes = interes;
module.exports.personainteres = personainteres;
module.exports.usuario = usuario;
