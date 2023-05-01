import { useContext, useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { contextListaProductos } from "../../../context/ContextListaProductos";
import {
  ContainerForm,
  Form,
  InputSearch,
  InputSubmit,
} from "./style/searcher";

export default function Searcher() {
  const busqueda = useContext(contextListaProductos);
  const { search, setInfoFiltros, infoFiltros } = busqueda;
  const [buscar, setBuscar] = useState("");

  const onChange = (e) => {
    setBuscar(e.target.value);
  };
  const realizarBusqueda = (e) => {
    e.preventDefault();
    if (buscar.trim() === "")
      return Swal.fire({
        icon: "error",
        title: "Campo vacio",
        text: "Debe escribir el producto que desea buscar",
      });
    setInfoFiltros({ ...infoFiltros, search: buscar });
  };
  useEffect(() => {
    if (!search) setBuscar("");
  }, [search]);

  return (
    <ContainerForm>
      <Form onSubmit={(e) => realizarBusqueda(e)}>
        <InputSearch
          type="search"
          placeholder="Buscar..."
          value={buscar}
          onChange={(e) => onChange(e)}
        />
        <InputSubmit type="submit" value="Buscar"></InputSubmit>
      </Form>
    </ContainerForm>
  );
}
