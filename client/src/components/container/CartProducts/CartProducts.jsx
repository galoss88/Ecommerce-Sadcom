import React, { useState } from "react";
import Product from "../../pure/Product/Product";
import Nav from "react-bootstrap/Nav";
import { FaShoppingCart } from "react-icons/fa";
import { Container } from "./stylesCartProducts";
import CartProduct from "../../pure/Product/CartProduct";

const CartProducts = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <Container>
      <Nav.Link
        onClick={() => setShowCart(!showCart)}
        style={{ "padding-top": "1vh" }}
      >
        <FaShoppingCart /> Carrito
      </Nav.Link>
      {showCart && <CartProduct />}
    </Container>
  );
};

export default CartProducts;
