const { Server: SocketServer } = require("socket.io");
const crearNuevoUsuario = require("./crearNuevoUsuario.jsx");
const descontarStock = require("./descontarStock.jsx");
const { actualizarPrecio } = require("./precioActualizado.jsx");

function configureSocket(server) {
  const io = new SocketServer(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("Id connect: " + socket.id);
    crearNuevoUsuario(socket);
    //DESCONTAR STOCK
    descontarStock(socket);
    //ENVIAR PRECIOS
    actualizarPrecio(socket);
    // socket.on("paginado", (mensaje) => console.log(mensaje));
  });

  return io;
}

module.exports = configureSocket;
