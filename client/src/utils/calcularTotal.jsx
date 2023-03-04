import { useSelector } from "react-redux";

const calcularTotalCarrito = () => {
  const carrito = useSelector((state) => state.cart);

  const total = carrito?.reduce(
    (acumulador, precioActual) => acumulador + precioActual.Venta,0
  );
  console.log("acacaca", total);
  return total;
};
export default calcularTotalCarrito;
