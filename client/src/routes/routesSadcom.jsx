import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailProducts from "../components/container/DetailProducts/DetailProducts";
import Productos from "../pages/Productos/Productos";
import Header from "../pages/Header/Header";
import NavBar from "../components/container/Navbar/Navbar";
import Home from "../pages/Home/Home.jsx";
import FAQ from "../pages/FAQ/FAQ.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import ResumenCompra from "../components/container/ResumenCompra/ResumenCompra";
import {
  ContainerSadcom,
  WrapperContenido,
  WrapperHeader,
  WrapperNavbar,
} from "./stylesRoutes/stylesSadcom";

const routesSadcom = () => {
  return (
    <ContainerSadcom>
      <WrapperHeader>
        <Header />
      </WrapperHeader>
      <WrapperNavbar>
        <NavBar />
      </WrapperNavbar>
      <WrapperContenido>
        <Routes>
          <Route path="/productos/*" element={<Productos />}></Route>
          <Route path="/detailProduct" element={<DetailProducts />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resumenCompra" element={<ResumenCompra />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </WrapperContenido>
    </ContainerSadcom>
  );
};

export default routesSadcom;
