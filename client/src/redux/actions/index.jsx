//imports
import axios from "axios";
//export nombre actions
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PAGINADO = "GET_PAGINADO";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const FILTER_PRICE = "FILTER_PRICE";
export const RESET_FILTERS = "RESET_FILTERS";
export const BUSQUEDA = "BUSQUEDA";
export const VACIAR_CARRITO = "VACIAR_CARRITO";
export const RESET_PAGINADO = "RESET_PAGINADO";
export const SELECCIONAR_PRODUCTO = "SELECCIONAR_PRODUCTO";
export const SHOW_DETAIL_PRODUCT = "SHOW_DETAIL_PRODUCT";
export const GUARDAR_USUARIO = "GUARDAR_USUARIO";
export const LOGIN_USER = "LOGIN_USER";
export const CARGAR_IMAGENES = "CARGAR_IMAGENES";

//Funciones actions
export function getProducts(page, filtro, search) {
  return async function (dispatch) {
    let products = await axios.get(
      `http://149.100.142.34:4000/api/productos/?page=${page}${
        filtro ? `&filtro=${filtro}` : ""
      }${search ? `&search=${search}` : ""}`
    );

    return dispatch({
      type: GET_PRODUCTS,
      payload: products.data,
    });
  };
}
//LOGIN
export const loginUser = (user) => {
  return async (dispatch) => {
    const enviarUsuario = await axios.post(
      "http://localhost:4000/api/login",
      user
    );
    console.log(enviarUsuario, "ververver");
    return dispatch({
      type: LOGIN_USER,
      payload: enviarUsuario.data,
    });
  };
};
//mostrar detalles
export const showDetailProduct = () => {
  return {
    type: SHOW_DETAIL_PRODUCT,
  };
};
//producto seleccionado
export const seleccionarProducto = (idProducto) => {
  return {
    type: SELECCIONAR_PRODUCTO,
    payload: idProducto,
  };
};
//agregar producto al carrito
export function addProductToCart(producto) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: producto,
  };
}
//vaciar carrito
export function vaciarCarrito() {
  return {
    type: VACIAR_CARRITO,
  };
}

//eliminar producto del carrito
export function deleteProductCart(id) {
  console.log(id, "ID DEL PRODUCOT ELIMINAR");
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
// export const crearUsuario = (datosUsuario) => {
//   return async () => {
//     await axios.post("http://localhost:4000/createUser", datosUsuario);
//     return {
//       type: "Crear Usuario",
//     };
//   };
// };
export const guardarUsuario = (datosUser) => {
  return {
    type: GUARDAR_USUARIO,
    payload: datosUser,
  };
};

//imagenes
export const cargarImagenes = () => {
  return async (dispatch) => {
    const images = await axios.get("http://localhost:4000/api/images");
    return dispatch({
      type: CARGAR_IMAGENES,
      payload: images.data,
    });
  };
};
