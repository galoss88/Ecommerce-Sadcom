//imports
import axios from "axios";
//export nombre actions
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SHOW_DETAIL = "SHOW_DETAIL";

//Funciones actions
export function getProducts() {
  return async function (dispatch) {
    let products = await axios.get("https://rickandmortyapi.com/api/character");
    return dispatch({
      type: GET_PRODUCTS,
      payload: products.data.results,
    });
  };
}

//VER DETALLE DE PRODUCTOS
export function showDetail(payload){
  return{
    type: SHOW_DETAIL,
    payload
  }
}
