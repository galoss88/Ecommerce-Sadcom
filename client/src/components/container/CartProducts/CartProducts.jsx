import React, { useEffect, useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";

import { Container, ProductosEnCarrito, Icono } from "./stylesCartProducts";
import CartProduct from "../../pure/Product/CartProduct";

import useCantidadFinalCarrito from "../../../hooks/useCantidadFinalCarrito";

const CartProducts = () => {
  const [showCart, setShowCart] = useState(false);
  const cartOpenRef = useRef(null);
  const cantidadFinalCarrito = useCantidadFinalCarrito();
  const mostrarOcultarCarrito = () => {
    setShowCart(!showCart);
  };
  const clickFueraCarrito = (e) => {
    cartOpenRef.current &&
      !cartOpenRef.current.contains(e.target) &&
      setShowCart(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", clickFueraCarrito);
    return () => {
      document.removeEventListener("mousedown", clickFueraCarrito);
    };
  }, []);
  return (
    <Container isOpen={showCart ? "open" : "close"}>
      <Nav.Link
        className="abreCierraCarrito"
        onClick={() => mostrarOcultarCarrito()}
        style={{ paddingTop: "1vh", fontSize: "2.5em" }}
      >
        <ProductosEnCarrito>{cantidadFinalCarrito}</ProductosEnCarrito>
        <Icono>
          <i className="bi bi-cart3"></i>
        </Icono>
      </Nav.Link>
      {showCart && (
        <div ref={cartOpenRef}>
          <CartProduct />
        </div>
      )}
    </Container>
  );
};

export default CartProducts;
