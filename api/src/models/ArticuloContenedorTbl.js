const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ArticuloContenedorTbl",
    {
      IdContenedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      IdArt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IdContenedorClase: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
