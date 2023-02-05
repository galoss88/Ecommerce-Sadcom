import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailProducts from "../components/container/DetailProducts/DetailProducts";
import Productos from "../pages/Productos/Productos";
import Header from "../pages/Header/Header";

const routesSadcom = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/productos/*" element={<Productos />}>
        <Route path="detailProduct" element={<DetailProducts/>} />
        </Route>
        <Route path="*" element={<p>Not found</p>}/>
      </Routes>
    </>
    
  );
};

export default routesSadcom;
