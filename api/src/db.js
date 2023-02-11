require("dotenv").config();
const {user, password, server, database} = process.env;
const mssql = require("mssql");
const dbSettings = {
    user: user,
    password: password,
    server: server,
    database: database,
    options: {
            encrypt: true, // for azure
            trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};
const getConection = async () =>{
    try {
        const pool = await mssql.connect(dbSettings);
        console.log(user)
        return pool;
    } catch (error) {
        console.log(error);
    }
};
getConection();
module.exports = {getConection};