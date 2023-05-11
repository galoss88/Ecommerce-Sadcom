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
export const GET_DATA_USER = "GET_DATA_USER";
export const GUARDAR_DATOS_COMPRA = "GUARDAR_DATOS_COMPRA";
export const GET_DATA_EMPRESA = "GET_DATA_EMPRESA";
//Funciones actions
//traer datos usuario
const local = "http://localhost:4000";
const prod = "/api";
const url = local;

export const getDataUser = (emailUser) => {
  return async function (dispatch) {
    let datos = await axios.get(`${url}/dataUser/?emailUser=${emailUser}`);

    return dispatch({
      type: GET_DATA_USER,
      payload: datos.data,
    });
  };
};
export function guardarDatosCompra(datosCompra) {
  return {
    type: GUARDAR_DATOS_COMPRA,
    payload: datosCompra,
  };
}
export function getProducts(page, filtro, search) {
  return async function (dispatch) {
    let products = await axios.get(
      `${url}/productos?page=${page}${filtro ? `&filtro=${filtro}` : ""}${
        search ? `&search=${search}` : ""
      }`
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
    const enviarUsuario = await axios.post(`${url}/login`, user);
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
//     await axios.post("${url}/createUser", datosUsuario);
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
export const enviarEmailCompra = (datosCompra) => {
  return async (dispatch) => {
    await axios.post(`${url}/sendEmail`, datosCompra);
    return dispatch({
      type: "ENVIAR_EMAIL_COMPRA",
    });
  };
};
//imagenes
export const cargarImagenes = () => {
  return async (dispatch) => {
    const images = await axios.get(`${url}/images`);
    return dispatch({
      type: CARGAR_IMAGENES,
      payload: images.data,
    });
  };
};

export const getDataEmpresa = () => {
  return async (dispatch) => {
    const dataEmpresa = await axios.get(`${url}/dataEmpresa`);
    return dispatch({
      type: GET_DATA_EMPRESA,
      payload: dataEmpresa.data,
    });
  };
};
