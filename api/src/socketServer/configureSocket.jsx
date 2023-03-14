const { Server: SocketServer } = require("socket.io");
const descontarStock = require("./descontarStock.jsx");
const { actualizarPrecio } = require("./precioActualizado.jsx");

function configureSocket(server) {
  const io = new SocketServer(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("Id connect: " + socket.id);

    //DESCONTAR STOCK
    descontarStock(socket);
    //ENVIAR PRECIOS
    actualizarPrecio(socket);
  });

  return io;
}

module.exports = configureSocket;
