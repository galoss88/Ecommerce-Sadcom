import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaShoppingCart} from "react-icons/fa"
import styled from "styled-components";

export default function NavBar() {
    const Wrapper = styled.div`
        display: flex;
        @media (max-width: 768px) {
            display: none;
        }
    `
    return(
        <div>
            
                <Navbar  key="xxl" bg="light" expand="xxl" >
                    <Container fluid>
                    
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
                        <b><Navbar.Brand href="/" /* style={{"padding-right": "25vw"}} */>Logo</Navbar.Brand></b>
                        <Wrapper> 
                            <Form className="d-flex"  style={{"padding-right": "30vw"}} >
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar..."
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-secondary">Ir</Button>
                            </Form>
                            <Nav.Link style={{"padding-top": "1vh"}}><FaShoppingCart/> Carrito</Nav.Link>
                            </Wrapper> 
                     
                   
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-xxl `} aria-labelledby={`offcanvasNavbarLabel-expand-xxl`} placement="start">
                            
                            <Offcanvas.Body>
                                <Nav className="flex-grow-2 pe-3 align-items-center">
                                    <hr/>
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <hr/>
                                    <Nav.Link href="#action2">Categorias</Nav.Link>
                                    <hr/>
                                    <Nav.Link href="#action2"><FaShoppingCart/> Carrito</Nav.Link>
                                    <hr/>
                                    <Nav.Link href="#action2">Preguntas frecuentes</Nav.Link>
                                    <hr/>
                                    <Nav.Link href="#action2">Contacto</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                            
                        </Navbar.Offcanvas>
                        
                    </Container>
                </Navbar>
          
        </div>
    )
}