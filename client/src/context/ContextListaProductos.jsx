import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/actions";

export const contextListaProductos = createContext();

const ListaProductosProvider = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [infoFiltros, setInfoFiltros] = useState({
    filterPrice: "",
    search: "",
    pageCurrent: "" || 1,
    resetPaginado: () => {},
  });

  const resetFiltros = () => {
    setInfoFiltros({
      ...infoFiltros,
      filterPrice: "",
      pageCurrent: 1,
    });
  };
  const verTodosLosProductos = () => {
    setInfoFiltros({
      ...infoFiltros,
      search: "",
      pageCurrent: 1,
      filterPrice: "",
    });
  };

  const { pageCurrent, filterPrice, search } = infoFiltros;
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        await dispatch(getProducts(pageCurrent, filterPrice, search));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, [infoFiltros]);
  return (
    <div>
      <contextListaProductos.Provider
        value={{
          infoFiltros,
          loading,
          search: infoFiltros.search,
          setInfoFiltros,
          resetFiltros,
          verTodosLosProductos,
        }}
      >
        {props.children}
      </contextListaProductos.Provider>
    </div>
  );
};
export default ListaProductosProvider;
