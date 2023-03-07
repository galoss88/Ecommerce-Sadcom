import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import Searcher from "../../pure/searcher/Searcher";
import { useNavigate } from "react-router-dom";
import "./stylesNavbar.css";
import CartProducts from "../CartProducts/CartProducts";
import { Wrapper } from "./styles/stylesNavbar";
import Login from "../Login/Login";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar key="xxxl" bg="light" expand="xxxl">
        <Container className="d-flex justify-content-between" fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxxl`} />
          <Navbar.Brand onClick={() => navigate("/")}>
            <b>Logo</b>
          </Navbar.Brand>
          <Searcher />
          <Login />
          <Wrapper>
            <CartProducts></CartProducts>
          </Wrapper>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxxl `}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxxl`}
            placement="start"
          >
            <Offcanvas.Body>
              <Nav className="flex-grow-2 pe-3 align-items-center">
                <hr />
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                <hr />
                <Nav.Link onClick={() => navigate("/productos")}>
                  Productos
                </Nav.Link>
                <hr />
                <Nav.Link href="#action2">
                  <FaShoppingCart /> Carrito
                </Nav.Link>
                <hr />
                <Nav.Link onClick={() => navigate("/faq")}>
                  Preguntas frecuentes
                </Nav.Link>
                <hr />
                <Nav.Link onClick={() => navigate("/contact")}>Contacto</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
