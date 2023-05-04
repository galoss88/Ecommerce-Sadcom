export const calcularCantidadTotalProductos = (productosCarrito) => {
  let cantidadDeProductos = 0;
  const evaluarStock = () => {
    for (const producto of productosCarrito) {
      cantidadDeProductos = cantidadDeProductos + producto.quantity;
    }
    return cantidadDeProductos;
  };
  return evaluarStock();
};
