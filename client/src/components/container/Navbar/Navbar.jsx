// import Nav from "react-bootstrap/Nav";
import { FaShoppingCart } from "react-icons/fa";
import Searcher from "../../pure/searcher/Searcher";
import "./stylesNavbar.css";
import CartProducts from "../CartProducts/CartProducts";
import {
  WrapperCartProducts,
  WrapperResponsive,
  WrapperFixed,
  ContainerNavbar,
  Img,
  WrapperSearch,
  WrapperLogo,
  WrapperLogin,
  WrapperLinks,
  LinkNavBar,
  ContainerNavBarResponsive,
} from "./styles/stylesNavbar";
import Login from "../Login/Login";

import { useSelector } from "react-redux";
import NavbarResponsive from "./NavbarResponsive";

export default function NavBar() {
  const imagenes = useSelector((state) => state.imagenes);

  return (
    <ContainerNavbar>
      <WrapperFixed>
        <ContainerNavBarResponsive>
          <NavbarResponsive />
        </ContainerNavBarResponsive>
        <WrapperLogo>
          <LinkNavBar to="/">
            <Img src={imagenes[0]?.RutaLogo} />
          </LinkNavBar>
        </WrapperLogo>
        <WrapperSearch>
          <Searcher />
        </WrapperSearch>
        <WrapperLogin>
          <Login />
        </WrapperLogin>
        <WrapperLinks>
          <LinkNavBar to="/">Home</LinkNavBar>
          <LinkNavBar to="/listaProductos">Productos</LinkNavBar>
          <LinkNavBar to="/resumenCompra">
            <FaShoppingCart /> Carrito
          </LinkNavBar>
          <LinkNavBar to="/faq">Preguntas frecuentes</LinkNavBar>
          <LinkNavBar to="/contact">Contacto</LinkNavBar>
        </WrapperLinks>
        <WrapperCartProducts>
          <CartProducts></CartProducts>
        </WrapperCartProducts>
      </WrapperFixed>
    </ContainerNavbar>
  );
}
