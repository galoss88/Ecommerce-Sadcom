import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import socket from "../../../utils/socket/socket";
import {
  ContainerResumenCompra,
  WrapperProductos,
  WrapperProductosAcomprar,
  WrapperRealizarCompra,
  WrapperTotales,
} from "./styles/stylesResumenCompra";
import { calcularProductosRepetidos } from "../../../utils/calcularProductosRepetidos";
import { eliminarRepetidos } from "../../../utils/eliminarProductoRepetido";
import Subtotal from "../../pure/Product/Subtotal";
import Total from "../../pure/Product/Total";
import ProductResumen from "../../pure/ProductResumen/ProductResumen";
import { enviarSocket, recibirSocket } from "../../../utils/enviarSocket";
import { vaciarCarrito } from "../../../redux/actions";
import SinProductos from "./SinProductos";
const CartProduct = () => {
  const dispatch = useDispatch();
  //state comprobar compra
  const [compraExitosa, setCompraExitosa] = useState(null);
  const [esperandoCompra, setEsperandoCompra] = useState(false);
  const [message, setMessage] = useState();
  //
  const products = useSelector((state) => state.cart);
  const conteoProductosCarrito = calcularProductosRepetidos(products);
  const productosSinRepetir = eliminarRepetidos(products);
  const finalizarCompra = () => {
    if (!products.length)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Su carrito esta vació.",
      });
    //--------------------- comprobar la compra ---------
    socket.emit("carritoDescontarStock", conteoProductosCarrito);
    setEsperandoCompra(true);
  };
  useEffect(() => {
    socket.on("compra-exitosa", (mensaje) => {
      setCompraExitosa(true);
      setEsperandoCompra(false);
      setMessage(mensaje);
    });
  }, []);
  useEffect(() => {
    socket.on("compra-rechazada", (mensaje) => {
      setCompraExitosa(false);
      setEsperandoCompra(false);
    });
  }, []);

  if (!products.length) return <SinProductos message={message} />;
  if (esperandoCompra)
    return <div>Espere un segundo mientras procesamos su compra...</div>;
  if (compraExitosa) {
    dispatch(vaciarCarrito());
    return Swal.fire({
      icon: "success",
      title: "Gracias por su compra!",
      text: "Le llegara la factura a su correo",
    });
  } else if (compraExitosa === false) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No hay stock o Hubo algun problema",
    });
  }
  return (
    <ContainerResumenCompra>
      <WrapperProductos>
        {message}
        <WrapperProductosAcomprar>
          {productosSinRepetir?.map((producto, index) => (
            <ProductResumen
              key={index}
              producto={producto}
              conteoProductos={conteoProductosCarrito}
            />
          ))}
        </WrapperProductosAcomprar>
        <WrapperTotales>
          <Subtotal />
        </WrapperTotales>
        <WrapperTotales>
          <Total />
        </WrapperTotales>
        <WrapperRealizarCompra onClick={() => finalizarCompra()}>
          Finalizar Compra
        </WrapperRealizarCompra>
      </WrapperProductos>
    </ContainerResumenCompra>
  );
};

export default CartProduct;
