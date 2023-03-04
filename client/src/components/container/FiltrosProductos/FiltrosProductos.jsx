import React, { useState } from "react";
import FilterPrecio from "../../pure/filtros/FilterPrecio";
import {
  // ButtonFilters,
  Container,
  FormFilters,
} from "./styles/stylesFiltrosProductos";

const FiltrosProductos = () => {
  return (
    <Container>
      <FormFilters>
        <FilterPrecio />
      </FormFilters>
    </Container>
  );
};

export default FiltrosProductos;
