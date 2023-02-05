import React from "react";
import { Route, Routes } from "react-router-dom";
import Productos from "../pages/Productos/Productos";


const routesSadcom = () => {
  return (
    <Routes>
      <Route path="/productos" element={<Productos />}></Route>
    </Routes>
  );
};

export default routesSadcom;
