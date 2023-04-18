const crypto = require("crypto");
const secretKey = crypto.randomBytes(64).toString("hex");
module.exports = {
  JWT_SECRET: secretKey,
  PORT: 4000,
  USER: "u468244241_festilandia",
  PASSWORD: "Festi9999",
  DATABASE_NAME: "u468244241_DbSadcom",
  HOST: "sql887.main-hosting.eu",
  PORT_DATABASE: 3306,
  DIALECT: "mysql",
  MERCADOPAGO_TOKEN:
    "APP_USR-2889120682731276-041423-74a6e8604a7072d3aac50a25b581ac45-1353138790",
};
