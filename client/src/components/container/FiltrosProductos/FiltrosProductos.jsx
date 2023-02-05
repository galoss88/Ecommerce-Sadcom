import React from "react";
import FilterPrecio from "../../pure/filtros/FilterPrecio";
import { Container, FormFilters } from "./styles/stylesFiltrosProductos";

const FiltrosProductos = () => {
  return (
    <Container>
      <FormFilters>
        {/* //FILTRO ORDEN PRECIO */}
        <FilterPrecio />
        {/* //FILTRO 2 //FILTRO 3 */}
      </FormFilters>
    </Container>
  );
};

export default FiltrosProductos;
