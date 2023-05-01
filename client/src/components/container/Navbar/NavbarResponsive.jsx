import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  ContainerLinksResponsive,
  ContainerResponsiveNav,
  LinkNavBarResponsive,
  WrapperLinksResponsive,
  WrapperLoginResponsive,
} from "./styles/stylesNavbar";
import { FaShoppingCart } from "react-icons/fa";
import Login from "../Login/Login";

function NavbarResponsive() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ContainerResponsiveNav>
      <Button
        style={{ backgroundColor: "transparent", border: "none" }}
        onClick={handleShow}
      >
        <i
          style={{
            color: "var(--color-principal)",
            fontSize: "2.8rem",
            fontWeight: "bold",
          }}
          className="bi bi-list"
        ></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header style={{fontSize:"2rem"}} closeButton>
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ContainerLinksResponsive>
            <WrapperLinksResponsive>
              <WrapperLoginResponsive>
                <Login />
              </WrapperLoginResponsive>
              <LinkNavBarResponsive to="/">Inicio</LinkNavBarResponsive>
              <LinkNavBarResponsive to="/listaProductos">
                Productos
              </LinkNavBarResponsive>
              <LinkNavBarResponsive to="/resumenCompra">
                <FaShoppingCart /> Carrito
              </LinkNavBarResponsive>
              <LinkNavBarResponsive to="/faq">
                Preguntas frecuentes
              </LinkNavBarResponsive>
              <LinkNavBarResponsive to="/contact">
                Contacto
              </LinkNavBarResponsive>
            </WrapperLinksResponsive>
          </ContainerLinksResponsive>
        </Offcanvas.Body>
      </Offcanvas>
    </ContainerResponsiveNav>
  );
}
export default NavbarResponsive;
