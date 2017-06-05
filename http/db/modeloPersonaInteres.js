var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var personainteres = sequelize.define('personainteres', {
        IdPersona: Sequelize.INTEGER,
        IdInteres: Sequelize.INTEGER,
    })

    return personainteres;

};

module.exports = ex;
