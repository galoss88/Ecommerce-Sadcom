const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ArticuloIvaTbl",
    {
      IdIva: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Descripcion: {
        type: DataTypes.STRING(50),
      },
      Alicuota: {
        type: DataTypes.REAL,
      },
      Estado: {
        type: DataTypes.BOOLEAN,
      },
      Sistema: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
