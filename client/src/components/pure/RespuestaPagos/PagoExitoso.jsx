import React, { useEffect, useState } from "react";
import socket from "../../../utils/socket/socket";
import { useDispatch, useSelector } from "react-redux";
// import { calcularCantidadTotalProductos } from "../../../utils/calcularCantidadTotalProductos";
import { enviarEmailCompra, vaciarCarrito } from "../../../redux/actions";
import Factura from "../FacturaCompra/FacturaCompra";
import Layout from "../../../pages/Layout/Layout";
import { calcularQuantity } from "../../../utils/calcularQuantity";
import ResumenCompra from "../FacturaProb/ResumenCompra";
import { ContainerPagoExitoso } from "./style/pagoExitoso";

const PagoExitoso = () => {
  const dispatch = useDispatch();
  const datosCompra = useSelector((state) => state.datosCompra);
  const dataEmpresa = useSelector((state) => state.dataEmpresa);
  const cart = useSelector((state) => state.cart);
  // const conteoProductosCarrito = calcularCantidadTotalProductos(cart);
  const [compraExitosa, setCompraExitosa] = useState(null);
  useEffect(() => {
    socket.emit("carritoDescontarStock", cart);
    dispatch(enviarEmailCompra({ ...datosCompra }));
    dispatch(vaciarCarrito());
  }, []);
  useEffect(() => {
    socket.on("compra-exitosa", (mensaje) => {
      setCompraExitosa(true);
    });
    return () => {
      socket.off("compra-exitosa", (mensaje) => {
        setCompraExitosa(true);
      });
    };
  }, []);

  if (compraExitosa)
    return (
      <Layout>
        <ContainerPagoExitoso>
          <ResumenCompra />
          <Factura />
        </ContainerPagoExitoso>
      </Layout>
    );
};

export default PagoExitoso;
