const { DataTypes } = require("sequelize");
const { conn } = require("../db.js");
module.exports = (sequelize) => {
  sequelize.define(
    "ArticuloTbl",
    {
      IdArt: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      Detalle: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      CodigoDeBarra: {
        type: DataTypes.STRING(50),
      },
      EstadoArt: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      CostoDolar: {
        type: DataTypes.REAL,
      },
      Costo: {
        type: DataTypes.REAL,
      },
      CostoOtros: {
        type: DataTypes.REAL,
      },
      GananciaPorcentaje: {
        type: DataTypes.REAL,
      },
      GananciaMonto: {
        type: DataTypes.REAL,
      },
      PrecioBruto: {
        type: DataTypes.REAL,
      },
      ImpuestosTotal: {
        type: DataTypes.REAL,
      },
      Venta: {
        type: DataTypes.REAL,
      },
      VentaOriginal: {
        type: DataTypes.REAL,
      },
      DescontarStock: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      Combo: {
        type: DataTypes.BOOLEAN,
        
      },
      InsumoDeCombo: {
        type: DataTypes.BOOLEAN,
        
      },
      SolicitaPrecio: {
        type: DataTypes.BOOLEAN,
        
      },
      SolicitaCantidad: {
        type: DataTypes.BOOLEAN,
       
      },
      Retornable: {
        type: DataTypes.BOOLEAN,
        
      },
      BloquearSiStockEnCero: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      BloquearSiStockEnCero: {
        type: DataTypes.DATE,
        
      },
      BloquearSiStockEnCero: {
        type: DataTypes.DATE,
        
      },
      BloquearSiStockEnCero: {
        type: DataTypes.DATE,
       
      },
      ImprimirPrecioModif: {
        type: DataTypes.BOOLEAN,
      },
      UnidadesPorBulto: {
        type: DataTypes.INTEGER,
      },
      Sistema: {
        type: DataTypes.BOOLEAN,
      
      },
      IdIva: {
        type: DataTypes.INTEGER,
      },
      IdImpInt: {
        type: DataTypes.INTEGER,
      },
      GruposId: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      PersonasId: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      StockTienda: {
        type: DataTypes.REAL,
      },
      CantidadVendidas: {
        type: DataTypes.REAL,
      },
      CantidadCompradas: {
        type: DataTypes.REAL,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
