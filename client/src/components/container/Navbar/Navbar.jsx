import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import { FaShoppingCart } from "react-icons/fa";
import Searcher from "../../pure/searcher/Searcher";
import { useNavigate } from "react-router-dom";
import "./stylesNavbar.css";
import CartProducts from "../CartProducts/CartProducts";
import { Wrapper, WrapperResponsive, WrapperFixed } from "./styles/stylesNavbar";
import Login from "../Login/Login";
import { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <WrapperFixed>
      <Navbar key="xxxl" bg="light" expand="xxxl">
        <Container className="d-flex justify-content-between sticky-top" fluid>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-xxxl`}
            onClick={toggleShow}
          />
          <Navbar.Brand onClick={() => navigate("/")}>
            <b>Logo</b>
          </Navbar.Brand>
          <WrapperResponsive>
            <Searcher />
            
          </WrapperResponsive>
          <Login />
         
          <Wrapper>
            <CartProducts></CartProducts>
          </Wrapper>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxxl `}
            placement="start"
            restoreFocus={false}
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Body>
              <Nav className="flex-grow-2 pe-3 align-items-center">
                <hr />
                <Nav.Link
                  onClick={() => {
                    navigate("/");
                    toggleShow();
                  }}
                >
                  Home
                </Nav.Link>
                <hr />
                <Nav.Link
                  onClick={() => {
                    navigate("/productos/listaProductos");
                    toggleShow();
                  }}
                >
                  Productos
                </Nav.Link>
                <hr />
                {/* <Nav.Link href="#action2">
                  <FaShoppingCart /> Carrito
                </Nav.Link>
                <hr />
                <Nav.Link onClick={() => {navigate("/faq"); toggleShow()}}>
                  Preguntas frecuentes
                </Nav.Link>
                <hr />
                <Nav.Link
                  onClick={() => {
                    navigate("/contact");
                    toggleShow();
                  }}
                >
                  Contacto
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      </WrapperFixed>
  );
}
