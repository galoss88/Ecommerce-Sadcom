import React from "react";
import { useState } from "react";

import { useSelector } from "react-redux";
import {
  Button,
  Container,
  Label,
  Li,
  Ul,
  WrapperButton,
  WrapperUl,
} from "../stylesHooks/stylesUsePaginado";
import { numerosPaginado } from "../utils/numerosPaginado";
import { scroll } from "../utils/scroll";

const usePaginado = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPagination = useSelector((state) => state.products);

  const { offset } = totalPagination;
  const estructuraPaginas = () => {
   
    const totalPages = totalPagination?.lastPage;
    const prevPage = () => {
      if (!totalPagination.hasPrevPage) return;
      setCurrentPage(totalPagination.prevPage);
    };
    const initialPage = () => {
      setCurrentPage(1);
    };
    const nextPage = () => {
      if (!totalPagination.hasNextPage) return;
      scroll("top");
      setCurrentPage(totalPagination.nextPage);
    };
    const finalPage = () => {
      setCurrentPage(totalPages);
    };

    const NumerosPaginado = numerosPaginado(totalPages);
    return (
      <Container>
        <WrapperButton>
          <Button onClick={() => initialPage()}>
            <i class="bi bi-chevron-bar-left"></i>
          </Button>
        </WrapperButton>
        <WrapperButton>
          <Button onClick={() => prevPage()}>
            <i className="bi bi-arrow-left"></i>
          </Button>
        </WrapperButton>

        <WrapperUl>
          {
            <Label>
              {currentPage} de {totalPages}
            </Label>
          }

          {/* <Ul>
            {NumerosPaginado?.map((numero) => (
              <Li paginaActual={currentPage === numero} key={numero}>
                {numero}
              </Li>
            ))}
          </Ul> */}
        </WrapperUl>
        <WrapperButton>
          <Button onClick={() => nextPage()}>
            <i className="bi bi-arrow-right"></i>
          </Button>
        </WrapperButton>
        <WrapperButton>
          <Button onClick={() => finalPage()}>
            <i className="bi bi-chevron-bar-right"></i>
          </Button>
        </WrapperButton>
      </Container>
    );
  };
  return [estructuraPaginas, currentPage, setCurrentPage, offset];
};

export default usePaginado;
