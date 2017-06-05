var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Persona = sequelize.define('personas', {
        Nombre: Sequelize.STRING,
        Edad: Sequelize.STRING,
    })

    return Persona;

};

module.exports = ex;
