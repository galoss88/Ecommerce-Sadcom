//imports
import axios from "axios";
//export nombre actions
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SHOW_DETAIL = "SHOW_DETAIL";
export const GET_PAGINADO = "GET_PAGINADO";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const FILTER_PRICE = "FILTER_PRICE";
export const RESET_FILTERS = "RESET_FILTERS";
export const BUSQUEDA = "BUSQUEDA";
//Funciones actions
export function getProducts(page, filtro, search) {
  return async function (dispatch) {
    let products = await axios.get(
      `http://localhost:4000/productos/?page=${page}${
        filtro ? `&filtro=${filtro}` : ""
      }${search ? `&search=${search}` : ""}`
    );

    return dispatch({
      type: GET_PRODUCTS,
      payload: products.data,
    });
  };
}

//VER DETALLE DE PRODUCTOS
export function showDetail(payload) {
  return {
    type: SHOW_DETAIL,
    payload,
  };
}

//agregar producto al carrito
export function addProductToCart(producto) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: producto,
  };
}

//eliminar producto del carrito
export function deleteProductCart(id) {
  return {
    type: DELETE_PRODUCT_CART,
    payload: id,
  };
}

//Ordenar por precio
export function filterPrice(filtro) {
  return {
    type: FILTER_PRICE,
    payload: filtro,
  };
}
export const resetFilters = (reset) => {
  return {
    type: RESET_FILTERS,
    payload: reset,
  };
};

export const searchProduct = (buscar) => {
  return {
    type: BUSQUEDA,
    payload: buscar,
  };
};
