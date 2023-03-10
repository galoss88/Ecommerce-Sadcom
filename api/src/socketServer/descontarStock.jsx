const { ArticuloTbl } = require("../db");

const descontarStock = (socket) =>
  socket.on("carritoDescontarStock", async (productos) => {
    try {
      for (let producto in productos) {
        const cantidad = productos[producto];
        const productoAdescontar = await ArticuloTbl.findOne({
          where: { IdArt: producto },
        });

        if (
          productoAdescontar.StockTienda > 0 &&
          productoAdescontar.StockTienda >= cantidad
        ) {
          productoAdescontar.StockTienda -= cantidad;
          await productoAdescontar.save();
          socket.emit("compraProductos", "Exito");
          return console.log("Se realizo la compra");
        }

        socket.emit("compraProductos", "Fracaso");
        console.log("No hay más stock");
      }
    } catch (error) {
      console.log("EROR AL DESCONTAR STOCK!", error);
    }
  });

module.exports = descontarStock;
