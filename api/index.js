const { config } = require("dotenv");
const server = require("./src/app.js");
config();
const { port } = process.env;

server.listen(port || 3000);
console.log("server listo en puerto", port);
