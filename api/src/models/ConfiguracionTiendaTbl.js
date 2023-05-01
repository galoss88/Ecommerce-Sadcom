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
      IdEmpresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      TokenMercadoPago: {
        type: DataTypes.STRING,
      },
      EstadoTienda: {
        type: DataTypes.TINYINT,
      },
      TituloBanner: {
        type: DataTypes.STRING("1000"),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
