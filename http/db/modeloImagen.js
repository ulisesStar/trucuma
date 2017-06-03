var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Imagen = sequelize.define('Imagenes', {
        imagen: {
			type: Sequelize.STRING,
			allowNull: false
		}
    })

    return Imagen;
};

module.exports = ex;
