import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListadoProductos from '../components/container/ListadoProductos/ListadoProductos';

const routesSadcom = () => {
  return (
    <Routes>
        <Route path='/productos' element={<ListadoProductos/>}>

        </Route>
    </Routes>
  )
}

export default routesSadcom;
