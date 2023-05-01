const { DataTypes } = require("sequelize");
const { conn } = require("../db.js");
module.exports = (sequelize) => {
  sequelize.define(
    "PersonaTbl",
    {
      IdPersona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      DniCuit: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Domicilio: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      IdClaseTel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      NroTel: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      IdLocalidad: {
        type: DataTypes.INTEGER,
      },
      IdCondTrib: {
        type: DataTypes.INTEGER,
      },
      IdPersonaCategoria: {
        type: DataTypes.INTEGER,
      },
      IdCajaCtaCte: {
        type: DataTypes.INTEGER,
      },
      // TokenMercadoPago: {
      //   type: DataTypes.STRING,
      // },
      // CuentaAsociadaAStore: {
      //   type: DataTypes.TINYINT,
      // },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
