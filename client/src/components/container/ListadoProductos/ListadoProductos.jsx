import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CardContainer,
  Container,
  WrapperCards,
  WrapperPaginado,
} from "./styles/styleListadoProductos";
import CardProduct from "../../pure/cardProduct/CardProduct";
import usePaginado from "../../../hooks/usePaginado";
import { useContext } from "react";
import { contextListaProductos } from "../../../context/ContextListaProductos";
import Loading from "../../pure/Loading/Loading";
import usePrecioActualizado from "../../../hooks/usePrecioActualizado";
import socket from "../../../utils/socket/socket";
import enviarPreciosActuales from "../../../utils/actualizarPrecio";
// import Pagination from "react-bootstrap/Pagination";
const ListadoProductos = ({ mostrarDetalle }) => {
  const enviarInfoFiltrado = useContext(contextListaProductos);
  const { setInfoFiltros, infoFiltros, loading } = enviarInfoFiltrado;
  //Traigo del estado global lo que necesito para realizar los filtrados y renderizarlo en la lista de productos.
  const filtrar = useSelector((state) => state.filtro);
  const todosLosProductos = useSelector((state) => state.products);

  //---------------------->>
  const [Paginado, currentPage, setCurrentPage, offset] = usePaginado();
  const [actualizarPrecio, setActualizarPrecio] = useState({});

  useEffect(() => {
    socket.emit("id-producto-actualizar", { offset, limit: 12 }, () => {
      console.log("se envio ID producto");
    });
    socket.on("precio-actualizado", (mensaje, callback) => {
      console.log("estes es el mensaje", mensaje);
      setActualizarPrecio(mensaje);
      if (mensaje) return callback("Todo funciono");
      return callback("Hubo un error");
    });
    return () => {
      socket.off("precio-actualizado", (mensaje, callback) => {
        setActualizarPrecio(mensaje);
        if (mensaje) return callback("Todo funciono");
        return callback("Hubo un error");
      });
    };
  }, []);

  useEffect(() => {
    setInfoFiltros({
      ...infoFiltros,
      filterPrice: filtrar,
      pageCurrent: currentPage,
      resetPaginado: setCurrentPage,
    });
  }, [currentPage, filtrar]);
  if (loading) return <Loading texto={"Cargando productos..."} />;
  if (todosLosProductos.length === 0)
    return (
      <Container>
        <b>Nos quedamos sin stock en los productos, lo sentimos! :¨(</b>
      </Container>
    );

  return (
    <Container>
      <WrapperCards>
        <CardContainer>
          {todosLosProductos?.productosAMostrar?.map((producto) => (
            <CardProduct
              key={producto.IdArt}
              producto={producto}
              mostrarDetalle={mostrarDetalle}
              actualizarPrecio={enviarPreciosActuales(
                actualizarPrecio,
                producto.IdArt
              )}
            />
          ))}
        </CardContainer>
      </WrapperCards>
      <WrapperPaginado>{todosLosProductos && <Paginado />}</WrapperPaginado>
    </Container>
  );
};

export default ListadoProductos;
