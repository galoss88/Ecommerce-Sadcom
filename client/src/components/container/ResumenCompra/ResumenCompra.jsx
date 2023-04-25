import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import socket from "../../../utils/socket/socket";
import {
  ContainerResumenCompra,
  WrapperPreciosTotales,
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
import { loginUser, vaciarCarrito } from "../../../redux/actions";
import SinProductos from "./SinProductos";
import Loading from "../../pure/Loading/Loading";
import { DatoUsuario } from "../../pure/login/PerfilUsuario/styles/stylesPerfilUsuario";
import { comprobarDatosUsuario } from "../../../utils/comprobarDatosUsuario";
import { enviarSocket } from "../../../utils/enviarSocket";
import { useAuth0 } from "@auth0/auth0-react";
import { Checkout } from "../../pure/BotonRealizarCompra.jsx/BotonCompra";
// import { Checkout } from "../../pure/BotonRealizarCompra.jsx/BotonCompra"; 
const CartProduct = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { user } = useAuth0();
  //state comprobar compra
  const [compraExitosa, setCompraExitosa] = useState(null);
  const [esperandoCompra, setEsperandoCompra] = useState(false);
  const [message, setMessage] = useState();
  //info usuario
  const datosUsuario = useSelector((state) => state.usuario);
  //
  const products = useSelector((state) => state.cart);
  const conteoProductosCarrito = calcularProductosRepetidos(products);
  const productosSinRepetir = eliminarRepetidos(products);
  const finalizarCompra = async() => {
    if (!products.length)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Su carrito esta vació.",
      });
    //comprobar usuario logeado
    if (isAuthenticated) {
      dispatch(loginUser(user));
    }
    if (!isAuthenticated) {
      return Swal.fire({
        icon: "error",
        title: "Usted no inicio sesion con su cuenta",
        text: "Por Favor, debe iniciar sesión y recuerde tener completos todos sus datos!",
      });
    }

    //comprobar info usuario

    if (!comprobarDatosUsuario(datosUsuario)) {
      return Swal.fire({
        icon: "error",
        title: "Falta completar datos de su usuario",
        text: "Por favor verifique que cuente con todos los datos de usuario, ya que son necesarios para el envio de su producto.",
      });
    }
    //enviar datos de usuario al servidor para la base de datos
    // dispatch(crearUsuario(datosUsuario));
    enviarSocket("datosUser", datosUsuario);
    //--------------------- comprobar la compra ---------
    socket.emit("carritoDescontarStock", conteoProductosCarrito);

    //REALIZAR COMPRA!!!! MERCADO PAGO
   await Checkout(products)
    setEsperandoCompra(true);
    
    //as
  };

  //quitamos mensaje de compra exitosa por ahora, hasta confirmar con mercado pago
  // useEffect(() => {
  //   socket.on("compra-exitosa", (mensaje) => {
  //     setCompraExitosa(true);
  //     setTimeout(() => {
  //       setEsperandoCompra(false);
  //     }, 3000);
  //   });
  //   return () => {
  //     socket.off("compra-exitosa", (mensaje) => {
  //       setCompraExitosa(true);
  //       setTimeout(() => {
  //         setEsperandoCompra(false);
  //       }, 3000);
  //     });
  //   };
  // }, []);
  useEffect(() => {
    socket.on("compra-rechazada", (mensaje) => {
      setCompraExitosa(false);
      setTimeout(() => {
        setEsperandoCompra(false);
      }, 3000);
    });
    return () => {
      socket.off("compra-rechazada", (mensaje) => {
        setCompraExitosa(false);
        setTimeout(() => {
          setEsperandoCompra(false);
        }, 3000);
      });
    };
  }, []);
  //comprobar login

  if (!products.length) return <SinProductos />;
  if (esperandoCompra)
    return (
      <Loading
        texto={"Procesando su compra, espere unos segundos, por favor..."}
      />
    );
    //quitamos mensaje por ahora
  // if (compraExitosa) {
  //   dispatch(vaciarCarrito());
  //   return Swal.fire({
  //     icon: "success",
  //     title: "Gracias por su compra!",
  //     text: "Le llegara la factura a su correo",
  //   });
  // } else if (compraExitosa === false) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "No hay stock o Hubo algun problema",
  //   });
  // }
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

        <WrapperPreciosTotales>
          <WrapperTotales>
            <Subtotal />
          </WrapperTotales>
          <WrapperTotales>
            <Total />
          </WrapperTotales>
          <WrapperRealizarCompra onClick={() => finalizarCompra()}>
            Finalizar Compra
          </WrapperRealizarCompra>
        </WrapperPreciosTotales>
      </WrapperProductos>
    </ContainerResumenCompra>
  );
};

export default CartProduct;
