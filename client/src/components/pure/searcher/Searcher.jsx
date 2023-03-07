import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { contextListaProductos } from "../../../context/ContextListaProductos";
import { getProducts, searchProduct } from "../../../redux/actions";

export default function Searcher() {
  const busqueda = useContext(contextListaProductos);
  const { search, setInfoFiltros, infoFiltros } = busqueda;
  const [buscar, setBuscar] = useState("");

  const onChange = (e) => {
    setBuscar(e.target.value);
  };
  const realizarBusqueda = (e) => {
    e.preventDefault();
    setInfoFiltros({ ...infoFiltros, search: buscar });
    // setBuscar("");
  };
  
  return (
    <Form className="d-flex" style={{ paddingRight: "20vw", paddingLeft: "20vw" }}>
      <Form.Control
        type="search"
        placeholder="Buscar..."
        className="me-2"
        aria-label="Search"
        value={buscar}
        onChange={(e) => onChange(e)}
      />
      <Button
        type="submit"
        variant="outline-secondary"
        onClick={(e) => realizarBusqueda(e)}
      >
        Ir
      </Button>
    </Form>
  );
}
