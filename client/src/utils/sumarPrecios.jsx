//Evaluar cantidades del carrito antes de agregar un producto al mismo.
//conteo productos es un objeto con id producto y con valor de cantidad de productos,
export const sumarPrecios = (productosSinRepetir, conteoProductos) => {
  const precios = [];
  const productos = () => {
    productosSinRepetir.forEach(({ id, unit_price }) => {
      const producto = { id, unit_price };
      precios.push(producto);
    });
    const preciosTotal = precios.reduce((acumulador, precioActual, i) => {
      console.log(acumulador);
      return (
        acumulador + precioActual.unit_price * conteoProductos[precioActual.id]
      );
    }, 0);

    return preciosTotal;
  };
  return productos();
};
