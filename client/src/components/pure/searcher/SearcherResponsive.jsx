import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { filterPrice, resetFilters } from "../../../redux/actions";


const ResponsiveSearcher = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 2.4rem;
    margin-top: 14vh;
    
    
  }
`;
export default function SearcherResponsive() {
  const dispatch = useDispatch();
  
  const estadoFiltros = useSelector((state) => state.reset);
  const handleFilters = (e) => {
    dispatch(filterPrice(e.target.value));
    dispatch(resetFilters("filtrosActivos"));
  };

  return (
    <div>
      <ResponsiveSearcher>
        <DropdownButton title="Filtros" id="bg-nested-dropdown" variant="light">
          <Dropdown.Item eventKey="1"><b>Ordenar por precio</b></Dropdown.Item>
          <Dropdown.Item eventKey="2"  value="mayorAmenor" onClick={(e) => handleFilters(e)}>Mayor a menor</Dropdown.Item>
          <Dropdown.Item eventKey="3" value="menorAmayor" onClick={(e) => handleFilters(e)}>Menor a mayor</Dropdown.Item>
        </DropdownButton>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary">Ir</Button>
        </Form>
      </ResponsiveSearcher>
    </div>
  );
}
