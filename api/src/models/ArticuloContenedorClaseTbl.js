const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ArticuloContenedorClaseTbl",
    {
      IdContenedorClase: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING(50),
      },
      Estado: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
