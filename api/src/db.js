require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DATABASE_NAME, USER, PASSWORD, DIALECT, HOST, PORT_DATABASE } =
  process.env;
const sequelize = new Sequelize(DATABASE_NAME, USER, PASSWORD, {
  dialect: DIALECT,
  host: HOST,
  port: 1433, //predeterminado de SQL server
  logging:false,
  dialectOptions: {
    optiones: {
      encrypt: true,
      
    },
  },
});
// //Comprobar si funciona sequelize
// const verificarConexion = async () => {
//   try {
//     const conexionExitosa = await sequelize.authenticate();
//     console.log("Conexion exitosa!!");
//   } catch (e) {
//     console.log({ message: e.message });
//   }
//   sequelize.authenticate();
// };
// verificarConexion();

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  ArticuloTbl,
  ArticuloContenedorClaseTbl,
  ArticuloContenedorTbl,
  ArticuloImpIntTbl,
  ArticuloIvaTbl,
} = sequelize.models;
//RELACIONES
ArticuloTbl.belongsToMany(ArticuloContenedorClaseTbl, {
  through: ArticuloContenedorTbl,
});
ArticuloContenedorClaseTbl.belongsToMany(ArticuloTbl, {
  through: ArticuloContenedorTbl,
});
//1-N UNO A MUCHOS
ArticuloIvaTbl.hasMany(ArticuloTbl, {
  foreignKey: "IdIva",
  onDelete: "CASCADE",
});

ArticuloTbl.belongsTo(ArticuloIvaTbl, {
  foreignKey: "IdIva",
});

//--
ArticuloImpIntTbl.hasMany(ArticuloTbl, {
  foreignKey: "IdImpInt",
  // onDelete: 'CASCADE'
});

ArticuloTbl.belongsTo(ArticuloImpIntTbl, {
  foreignKey: "IdImpInt",
});

module.exports = {
  ArticuloTbl,
  ArticuloContenedorClaseTbl,
  ArticuloContenedorTbl,
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

// require("dotenv").config();
// const { user, password, server, database } = process.env;
// const mssql = require("mssql");
// const dbSettings = {
//   user,
//   password,
//   server,
//   database,
//   options: {
//     encrypt: true, // for azure
//     trustServerCertificate: true, // change to true for local dev / self-signed certs
//   },
// };

// const getConection = async () => {
//   try {
//     const pool = await mssql.connect(dbSettings);
//     const result = pool.request().query("SELECT 1");
//     return pool;
//   } catch (error) {
//     console.log(error);
//   }
// };
// getConection();
// module.exports = { getConection };
