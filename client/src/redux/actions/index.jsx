//imports
import axios from "axios";
//export nombre actions
export const GET_PRODUCTS = "GET_PRODUCTS";

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
