var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Interes = sequelize.define('interes', {
        Nombre: Sequelize.STRING,
    })

    return Interes;
    
};

module.exports = ex;
