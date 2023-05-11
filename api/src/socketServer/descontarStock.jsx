const { ArticuloTbl, CajaJornadaTbl } = require("../db");

const descontarStock = (socket) =>
  socket.on("carritoDescontarStock", async (productos) => {
    console.log(productos);
    try {
      for (let producto of productos.cart) {
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
          console.log("Se realizo la compra");
        } else {
          socket.emit("compra-rechazada", "No hay mas stock!");
          console.log("No hay más stock");
        }
      }
      const ingresoActual = await CajaJornadaTbl.findOne({
        where: { Nombre: "SadcomStore" },
      });
      if (ingresoActual) {
        ingresoActual.Ingresos =
          ingresoActual.Ingresos + productos.datosCompra.precioTotal;
        ingresoActual.Operaciones += 1;
        await ingresoActual.save();
      }
    } catch (error) {
      console.log("EROR AL DESCONTAR STOCK!", error);
    }
  });

module.exports = descontarStock;
