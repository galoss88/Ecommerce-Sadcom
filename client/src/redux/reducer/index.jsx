//import actions
import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_CART,
  FILTER_PRICE,
  GET_PRODUCTS,
  SHOW_DETAIL,
  RESET_FILTERS,
  BUSQUEDA,
} from "../actions/index";
//estado global redux
const initialState = {
  products: [],
  showDetail: null,
  paginado: [],
  cart: [],
  filtro: "",
  reset: "",
  search: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SHOW_DETAIL: {
      return {
        ...state,
        showDetail: action.payload,
      };
    }

    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case DELETE_PRODUCT_CART: {
      const buscarProductoAEliminar = state.cart.find(
        (producto) => producto.IdArt === action.payload
      );
      const eliminarProducto = state.cart.filter(
        (producto) => producto !== buscarProductoAEliminar
      );
      return {
        ...state,
        cart: eliminarProducto,
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
    //Default
    default:
      return state;
  }
}
