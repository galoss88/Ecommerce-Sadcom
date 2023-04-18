const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ConfiguracionTiendaTbl",
    {
      IdTienda: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      NombreTienda: {
        type: DataTypes.TEXT("long"),
      },
      RutaBanner: {
        type: DataTypes.TEXT("long"),
      },
      RutaLogo: {
        type: DataTypes.TEXT("long"),
      },
      DescripcionBanner: {
        type: DataTypes.TEXT("long"),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
