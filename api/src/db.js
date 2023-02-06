const mssql = require("mssql");

const dbSettings = {
    user: "sadcom",
    password: "com2022",
    server: "localhost",
    database: "sadcomEcommerce",
    options: {
            encrypt: true, // for azure
            trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

const getConection = async () =>{
    try {
        const pool = await mssql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getConection();