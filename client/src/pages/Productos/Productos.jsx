import React, { useEffect, useState } from "react";
import FiltrosProductos from "../../components/container/FiltrosProductos/FiltrosProductos";
import ListadoProductos from "../../components/container/ListadoProductos/ListadoProductos";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showDetail } from "../../redux/actions";
const DivProductos = styled.div`
  display: flex;
`;
const Productos = () => {
  
  const detailShow = useSelector(state => state.showDetail)
 const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const mostrarDetalle = ()=>{    
    navigate("/productos/detailProduct")
    dispatch(showDetail(true));
  }

  if (detailShow) return <Outlet />;

  return (
    <DivProductos>
      <FiltrosProductos />
      <ListadoProductos mostrarDetalle={mostrarDetalle}/>
    </DivProductos>
  );
};

export default Productos;