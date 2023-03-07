export const calcularProductosRepetidos = (listaProductos) => {
  const cantidadDeProductos = {};

  for (const producto of listaProductos) {
    cantidadDeProductos[producto.IdArt] =
      (cantidadDeProductos[producto.IdArt] || 0) + 1;
  }
  return cantidadDeProductos;
};
