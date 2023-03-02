import React, { useState } from "react";
import FilterPrecio from "../../pure/filtros/FilterPrecio";
import {
  // ButtonFilters,
  Container,
  FormFilters,
} from "./styles/stylesFiltrosProductos";

const FiltrosProductos = () => {
  // //state manejar boton filtros responsive.
  // const [showButtonResponsive, setShowButtonResponsive] = useState(false);
  // const showButtonFilters = (e) => {
  //   e.preventDefault();
  //   setShowButtonResponsive(!showButtonResponsive);
  // };
  return (
    <Container>
      <FormFilters>
        {/* <ButtonFilters
          // showButtonResponsive={showButtonResponsive}
          // onClick={(e) => showButtonFilters(e)}
        >
          Filtros
        </ButtonFilters> */}
        {/* //FILTRO ORDEN PRECIO */}
        <FilterPrecio/>
        {/* //FILTRO 2 //FILTRO 3 */}
      </FormFilters>
    </Container>
  );
};

export default FiltrosProductos;
