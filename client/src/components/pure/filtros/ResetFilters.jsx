import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { contextListaProductos } from "../../../context/ContextListaProductos";
import { getProducts, resetFilters } from "../../../redux/actions";
import {
  ButtonResetFilters,
  WrapperButton,
} from "./styles/stylesButtonResetFilters";

const ResetFilters = () => {
  const dispatch = useDispatch();
  const resetearFiltro = useContext(contextListaProductos);
  const { resetFiltros, verTodosLosProductos, infoFiltros } = resetearFiltro;
  const {resetPaginado} = infoFiltros
  const reset = () => {
    resetFiltros();
    // dispatch(getProducts(1));
    dispatch(resetFilters("reset"));
  };
  const allProducts = () => {
    verTodosLosProductos();
    dispatch(resetFilters("reset"));
    resetPaginado(1)
  };
  return (
    <WrapperButton>
      <ButtonResetFilters onClick={allProducts}>
        Ver todos los productos
      </ButtonResetFilters>
      <ButtonResetFilters onClick={() => reset()}>
        Reiniciar Filtros
      </ButtonResetFilters>
    </WrapperButton>
  );
};

export default ResetFilters;
