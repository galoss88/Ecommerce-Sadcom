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

export default function NavBar() {

  const navigate = useNavigate();
  return (
    <div>
      <Navbar key="xxxl" bg="light" expand="xxxl">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxxl`} />
          <Navbar.Brand onClick={() => navigate("/")}>
            <b>Logo</b>
          </Navbar.Brand>
          <Wrapper >
            <Searcher />        
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
                <Nav.Link href="/">Home</Nav.Link>
                <hr />
                <Nav.Link href="#action2">Categorias</Nav.Link>
                <hr />
                <Nav.Link href="#action2">
                  <FaShoppingCart /> Carrito
                </Nav.Link>
                <hr />
                <Nav.Link href="/faq">Preguntas frecuentes</Nav.Link>
                <hr />
                <Nav.Link href="#action2">Contacto</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
