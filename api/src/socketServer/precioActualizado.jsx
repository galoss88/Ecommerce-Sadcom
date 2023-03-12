const { ArticuloTbl } = require("../db");

const actualizarPrecio = async (socket) => {
  const precio = await ArticuloTbl.findAll({
    attributes: ["IdArt","Venta"],
  });
  socket.emit()
};
