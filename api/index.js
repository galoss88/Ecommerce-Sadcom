const server = require('./src/app.js');


const port = 3000;
server.listen(port);

console.log("server listo en puerto", port);