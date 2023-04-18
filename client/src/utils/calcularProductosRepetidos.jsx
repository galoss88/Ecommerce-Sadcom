export const calcularProductosRepetidos = (productosCarrito) => {
  const cantidadDeProductos = {};
  const evaluarStock = () => {
    for (const producto of productosCarrito) {
      cantidadDeProductos[producto.id] =
        (cantidadDeProductos[producto.id] || 1) +
        (cantidadDeProductos[producto.id] < producto.StockTienda ? 1 : 0);
    }
    return cantidadDeProductos;
  };
  return evaluarStock()
};
