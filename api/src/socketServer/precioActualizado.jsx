const { ArticuloTbl } = require("../db");

const actualizarPrecio = (socket) => {
  socket.on("id-producto-actualizar", async (mensaje) => {
    // const precio = await ArticuloTbl.findAll({
    //   attributes: ["IdArt", "Venta"],
    // });
    console.log("mensaje precioo", mensaje);
    const precio = await ArticuloTbl.findOne({
      where: { IdArt: mensaje },
    });
   
    socket.emit("precio-actualizado", precio);
  });
};

module.exports = { actualizarPrecio };
