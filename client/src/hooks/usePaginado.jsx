import React from "react";
import { useState } from "react";

import { useSelector } from "react-redux";
import {
  Button,
  Container,
  Li,
  Ul,
  WrapperButton,
  WrapperUl,
} from "../stylesHooks/stylesUsePaginado";
import { numerosPaginado } from "../utils/numerosPaginado";

const usePaginado = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const estructuraPaginas = () => {
    const totalPagination = useSelector((state) => state.paginado);
    const totalPages = totalPagination?.lastPage;
    const prevPage = () => {
      setCurrentPage(totalPagination.prevPage);
    };
    const nextPage = () => {
      setCurrentPage(totalPagination.nextPage);
    };
    const NumerosPaginado = numerosPaginado(totalPages);
    return (
      <Container>
        <WrapperButton>
          <Button onClick={() => prevPage()}>
            <i class="bi bi-arrow-left"></i>
          </Button>
        </WrapperButton>
        <WrapperUl>
        <Ul>
          {NumerosPaginado?.map((numero) => (
            <Li paginaActual={currentPage === numero} key={numero}>
              {numero}
            </Li>
          ))}
        </Ul>
        </WrapperUl>
        <WrapperButton>
          <Button onClick={() => nextPage()}>
            <i class="bi bi-arrow-right"></i>
          </Button>
        </WrapperButton>
      </Container>
    );
  };
  return [estructuraPaginas, currentPage];
};

export default usePaginado;
