var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Persona = sequelize.define('objetos', {
        Nombre: Sequelize.STRING,
        Tipo: Sequelize.STRING
    })

    return Persona;

};

module.exports = ex;