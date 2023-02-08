import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailProducts from "../components/container/DetailProducts/DetailProducts";
import Productos from "../pages/Productos/Productos";
import Header from "../pages/Header/Header";
import NavBar from "../components/container/Navbar/Navbar";
import Home from "../pages/Home/Home.jsx"
import FAQ from "../pages/FAQ/FAQ.jsx";

const routesSadcom = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/productos/*" element={<Productos />}>
        <Route path="detailProduct" element={<DetailProducts/>} />
        </Route>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="*" element={<p>Not found</p>}/>
      </Routes>
    </>
    
  );
};

export default routesSadcom;
