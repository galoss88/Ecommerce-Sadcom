const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "CajaJornadaTbl",
    {
      IdCajaJornada: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING(100),
      },
      Ingresos: {
        type: DataTypes.DOUBLE,
      },
      Operaciones: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
