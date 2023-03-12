//Evaluar cantidades del carrito antes de agregar un producto al mismo.
//conteo productos es un objeto con id producto y con valor de cantidad de productos,
export const sumarPrecios = (productosSinRepetir, conteoProductos) => {
  const precios = [];
  productosSinRepetir.forEach(({ IdArt, Venta }) => {
    const producto = { IdArt, Venta };
    precios.push(producto);
  });
  const preciosTotal = precios.reduce((acumulador, precioActual, i) => {
    console.log(
      acumulador + precioActual.Venta * conteoProductos[precioActual.IdArt],
      "acumulador"
    );
    return (
      acumulador + precioActual.Venta * conteoProductos[precioActual.IdArt]
    );
  }, 0);

  return preciosTotal;
};
