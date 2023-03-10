import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import io from "socket.io-client";
const socket = io("http://localhost:4000");
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
  const [compraExitosa, setCompraExitosa] = useState("");

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
    enviarSocket("carritoDescontarStock", conteoProductosCarrito);
    recibirSocket("compraProductos", setCompras);
    console.log(compras)
    dispatch(vaciarCarrito());

    Swal.fire({
      icon: "success",
      title: "Gracias por su compra!",
      text: "Le llegara la factura a su correo",
    });
  };
  if (!products.length) return <SinProductos />;
  return (
    <ContainerResumenCompra>
      <WrapperProductos>
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
