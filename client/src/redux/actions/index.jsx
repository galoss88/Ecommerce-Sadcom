//imports
import axios from "axios";
//export nombre actions
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SHOW_DETAIL = "SHOW_DETAIL";
export const GET_PAGINADO = "GET_PAGINADO";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
//Funciones actions
export function getProducts() {
  return async function (dispatch) {
    let products = await axios.get(
      "http://localhost:4000/productos/totalProductos"
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

//paginado
export function pagination(currentPage) {
  return async function (dispatch) {
    let paginado = await axios.get(
      `http://localhost:4000/paginado/${currentPage}`
    );
    return dispatch({
      type: GET_PAGINADO,
      payload: paginado.data,
    });
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
