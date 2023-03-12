import { useSelector } from "react-redux";
import { convertirNumeroMiles } from "./convertirNumeroAmiles";

const calcularTotalCarrito = (carrito) => {
  const total = carrito?.reduce(
    (acumulador, precioActual) => acumulador + precioActual.Venta,
    0
  );
  const totalSinDecimles = total
  
  return totalSinDecimles;
};
export default calcularTotalCarrito;
