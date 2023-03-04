import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/actions";

export const contextListaProductos = createContext();

const ListaProductosProvider = (props) => {
  const dispatch = useDispatch();
  const [infoFiltros, setInfoFiltros] = useState({
    filterPrice: "",
    search: "",
    pageCurrent: "",
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
    });
  };

  const { pageCurrent, filterPrice, search } = infoFiltros;
  useEffect(() => {
    dispatch(getProducts(pageCurrent, filterPrice, search));
  }, [infoFiltros]);
  return (
    <div>
      <contextListaProductos.Provider
        value={{
          infoFiltros,
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
