const { ArticuloTbl } = require("../db");

const descontarStock = (socket) =>
  socket.on("carritoDescontarStock", async (productos) => {
    try {
      for (let producto of productos) {
        const cantidad = producto.quantity;
        const productoAdescontar = await ArticuloTbl.findOne({
          where: { IdArt: producto.id },
        });
        if (
          productoAdescontar.StockTienda > 0 &&
          productoAdescontar.StockTienda >= cantidad
        ) {
          productoAdescontar.StockTienda -= cantidad;
          await productoAdescontar.save();
          await socket.emit("compra-exitosa", "Exito");
          return console.log("Se realizo la compra");
        }

        socket.emit("compra-rechazada", "No hay mas stock!");
        console.log("No hay más stock");
      }
    } catch (error) {
      console.log("EROR AL DESCONTAR STOCK!", error);
    }
  });

module.exports = descontarStock;
