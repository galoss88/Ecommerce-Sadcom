import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  ContainerResumenCompra,
  WrapperPreciosTotales,
  WrapperProductos,
  WrapperProductosAcomprar,
  WrapperRealizarCompra,
  WrapperTotales,
} from "./styles/stylesResumenCompra";
import { calcularCantidadTotalProductos } from "../../../utils/calcularCantidadTotalProductos";
import { eliminarRepetidos } from "../../../utils/eliminarProductoRepetido";
import Total from "../../pure/Product/Total";
import ProductResumen from "../../pure/ProductResumen/ProductResumen";
import { loginUser, vaciarCarrito } from "../../../redux/actions";
import SinProductos from "./SinProductos";
import Loading from "../../pure/Loading/Loading";
import { comprobarDatosUsuario } from "../../../utils/comprobarDatosUsuario";
import { useAuth0 } from "@auth0/auth0-react";
import { Checkout } from "../../pure/BotonRealizarCompra.jsx/BotonCompra";
import Layout from "../../../pages/Layout/Layout";
// import { Checkout } from "../../pure/BotonRealizarCompra.jsx/BotonCompra";
const CartProduct = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { user } = useAuth0();
  //state comprobar compra
  const [esperandoCompra, setEsperandoCompra] = useState(false);
  //info usuario
  const datosUsuario = useSelector((state) => state.usuario);
  //
  const products = useSelector((state) => state.cart);
  const conteoProductosCarrito = calcularCantidadTotalProductos(products);
  const productosSinRepetir = eliminarRepetidos(products);
  const finalizarCompra = async () => {
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

    setEsperandoCompra(true);
    //REALIZAR COMPRA!!!! MERCADO PAGO
    await Checkout(products, datosUsuario, dispatch);
    // //--------------------- comprobar la compra ---------
    // socket.emit("carritoDescontarStock", conteoProductosCarrito);
    //as
  };

  if (!products.length) return <SinProductos />;
  if (esperandoCompra)
    return (
      <Loading
        texto={"Procesando su compra, espere unos segundos, por favor..."}
      />
    );

  return (
    <Layout>
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
            {/* no tenemos subtotal */}
            {/* <WrapperTotales>
              <Subtotal />
            </WrapperTotales> */}
            <WrapperTotales>
              <Total />
            </WrapperTotales>
            <WrapperRealizarCompra onClick={() => finalizarCompra()}>
              Finalizar Compra
            </WrapperRealizarCompra>
          </WrapperPreciosTotales>
        </WrapperProductos>
      </ContainerResumenCompra>
    </Layout>
  );
};

export default CartProduct;
