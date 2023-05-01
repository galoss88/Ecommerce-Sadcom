import { getDataEmpresa, guardarDatosCompra } from "../../../redux/actions";
import { calcularCantidadTotalProductos } from "../../../utils/calcularCantidadTotalProductos";
import { sumarPrecios } from "../../../utils/sumarPrecios";

export const Checkout = async (carrito, datosUsuario, dispatch) => {
  const response = await fetch("http://localhost:4000/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      carrito,
      // Aquí se especifica el monto y los detalles del pago
    }),
  });
  const preference = await response.json();
  if (preference.resp.body) {
    const { items } = preference.resp.body;
    const { DniCuit, Domicilio, Email, Nombre, NroTel } = datosUsuario;
    const totalVendidos = calcularCantidadTotalProductos(items);
    const precioTotal = sumarPrecios(items);
    const datosCompra = {
      Nombre,
      DniCuit,
      NroTel,
      Email,
      Domicilio,
      totalVendidos,
      precioTotal,
      items,
    };
    dispatch(guardarDatosCompra(datosCompra));
    dispatch(getDataEmpresa());
  }
  return (window.location.href = preference.resp.body.init_point);
};
