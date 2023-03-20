import React, { useState } from "react";
import FilterPrecio from "../../pure/filtros/FilterPrecio";
import ResetFilters from "../../pure/filtros/ResetFilters";
import {
  // ButtonFilters,
  Container,
  FormFilters,
} from "./styles/stylesFiltrosProductos";

const FiltrosProductos = () => {
  return (
    <Container>
      <ResetFilters />
      <FormFilters>
        <FilterPrecio />
      </FormFilters>
    </Container>
  );
};

export default FiltrosProductos;
