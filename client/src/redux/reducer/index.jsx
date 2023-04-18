//import actions
import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_CART,
  FILTER_PRICE,
  GET_PRODUCTS,
  RESET_FILTERS,
  BUSQUEDA,
  VACIAR_CARRITO,
  SELECCIONAR_PRODUCTO,
  SHOW_DETAIL_PRODUCT,
  GUARDAR_USUARIO,
  LOGIN_USER,
  CARGAR_IMAGENES,
} from "../actions/index";
//estado global redux
const initialState = {
  products: [],
  paginado: [],
  cart: [],
  filtro: "",
  reset: "",
  search: "",
  productoSeleccionado: null,
  detalleProductoSeleccionado: {},
  usuario: {},
  loginToken: "",
  imagenes: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case CARGAR_IMAGENES: {
      return {
        ...state,
        imagenes: action.payload,
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        loginToken: action.payload,
      };
    }
    case SELECCIONAR_PRODUCTO: {
      return {
        ...state,
        productoSeleccionado: action.payload,
      };
    }
    case SHOW_DETAIL_PRODUCT: {
      const todosProductos = state.products.productosAMostrar;

      const detalleProducto = todosProductos?.find(
        (producto) => (producto.IdArt = state.productoSeleccionado)
      );
      return {
        ...state,
        detalleProductoSeleccionado: detalleProducto,
      };
    }
    case ADD_PRODUCT_TO_CART: {
      const newProduct = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      return {
        ...state,
        cart: [...state.cart, ...newProduct],
      };
    }
    case VACIAR_CARRITO: {
      return {
        ...state,
        cart: [],
      };
    }
    case DELETE_PRODUCT_CART: {
      const productos = state.cart;
      const productoAEliminar = productos.findIndex(
        (producto) => producto.id === action.payload
      );

      const productoEliminado = productos.splice(productoAEliminar, 1);
      return {
        ...state,
        cart: [...productos],
      };
    }
    case FILTER_PRICE: {
      return {
        ...state,
        filtro: action.payload,
      };
    }
    case RESET_FILTERS: {
      return {
        ...state,
        reset: action.payload,
      };
    }
    case BUSQUEDA: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case GUARDAR_USUARIO: {
      return {
        ...state,
        usuario: { ...action.payload },
      };
    }
    //Default
    default:
      return state;
  }
}
