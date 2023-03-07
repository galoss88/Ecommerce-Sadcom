import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListadoProductos from '../components/container/ListadoProductos/ListadoProductos'

const RoutesProduct = () => {
  return (
    <Routes>
    <Route path="listaProductos" element={<ListadoProductos />} />
    <Route
      path="resumenCompra"
      element={<button>HOAOAOSMAOSMDOASDM</button>}
    />
  </Routes>
  )
}

export default RoutesProduct
