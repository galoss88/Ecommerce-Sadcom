const Sequelize = require("sequelize");
const sequelize = new Sequelize("SadcomEcommerce", "galo88", "78914526", {
  dialect: "mssql",
  host: "localhost",
  port: 1433, //predeterminado de SQL server
  dialectOptions: {
    optiones: {
      encrypt: true,
    },
  },
});
//Comprobar si funciona sequelize
sequelize.authenticate()
  .then(() => {
      console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
      console.error('Error al conectarse a la base de datos:', err);
  });

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
