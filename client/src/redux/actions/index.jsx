//imports
import axios from "axios";
//export nombre actions
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SHOW_DETAIL = "SHOW_DETAIL";
export const GET_PAGINADO = "GET_PAGINADO";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const FILTER_PRICE = "FILTER_PRICE";
//Funciones actions
export function getProducts(page, filtro) {
  return async function (dispatch) {
    let products = await axios.get(
      `http://localhost:4000/productos/?page=${page}${
        filtro ? (filtro = filtro) : ""
      }`
    );
    console.log(products.data);
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
export function pagination(currentPage, filtro) {
  return async function (dispatch) {
    let paginado = await axios.get(
      `http://localhost:4000/paginado/?page=${currentPage}&filtro=${filtro}`
    );

    return dispatch({
      type: GET_PAGINADO,
      payload: paginado.data,
    });
  };
}

//agregar producto al carrito
export function addProductToCart(producto) {
  console.log(producto, "action");
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
