export const calcularProductosRepetidos = (listaProductos) => {
  const cantidadDeProductos = {};

  for (const producto of listaProductos) {
    cantidadDeProductos[producto.IdArt] =
      (cantidadDeProductos[producto.IdArt] || 1) +
      (cantidadDeProductos[producto.IdArt] < producto.StockTienda ? 1 : 0);
  }
  return cantidadDeProductos;
};
