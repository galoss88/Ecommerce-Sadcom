const { ArticuloTbl } = require("../db");

const actualizarPrecio = async (socket) => {
  socket.on("id-producto-actualizar", async (mensaje, respuesta) => {
    // console.log("mensaje precioo", mensaje);
    //  respuesta("Llego el ID del producto")
    //  const precio = await ArticuloTbl.findOne({
    //    where: { IdArt: mensaje },
    //  });
    const { offset, limit } = mensaje;
    console.log(offset, limit)
    const precio = await ArticuloTbl.findAll({
      attributes: ["IdArt", "Venta"],
      // offset,
      // limit,
    });
    socket.emit("precio-actualizado", precio, (res) =>
    console.log("Respuesta servidor: " + res)
  );
  });
  
};

module.exports = { actualizarPrecio };
