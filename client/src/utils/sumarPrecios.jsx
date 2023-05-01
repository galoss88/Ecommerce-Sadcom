export const sumarPrecios = (carrito) => {
  let sumaTotal = 0;
  const sumaTotalCarrito = carrito.forEach((producto) => {
    sumaTotal = sumaTotal + producto.unit_price * producto.quantity;
  });

  return sumaTotal;
};
