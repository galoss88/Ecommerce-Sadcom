import React, { useState } from "react";
import Product from "../../pure/Product/Product";
import Nav from "react-bootstrap/Nav";
import { FaShoppingCart } from "react-icons/fa";
import { Container, ProductosEnCarrito } from "./stylesCartProducts";
import CartProduct from "../../pure/Product/CartProduct";
import { useSelector } from "react-redux";
import { calcularProductosRepetidos } from "../../../utils/calcularProductosRepetidos";

const CartProducts = () => {
  const [showCart, setShowCart] = useState(false);
  const carritoConProductos = useSelector((state) => state.cart);
  const productos = carritoConProductos.length;
  const mostrarOcultarCarrito = () => {
    setShowCart(!showCart);
  };
  return (
    <Container isOpen={showCart ? "open" : "close"}>
      <Nav.Link
        className="abreCierraCarrito"
        onClick={() => mostrarOcultarCarrito()}
        style={{ paddingTop: "1vh", fontSize: "2em" }}
      >
        <ProductosEnCarrito>{productos}</ProductosEnCarrito>
        <i className="bi bi-cart3"></i>
      </Nav.Link>
      {showCart && <CartProduct />}
    </Container>
  );
};

export default CartProducts;
