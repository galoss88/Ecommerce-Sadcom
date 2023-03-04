//import actions
import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_CART,
  FILTER_PRICE,
  GET_PAGINADO,
  GET_PRODUCTS,
  SHOW_DETAIL,
} from "../actions/index";
//estado global redux
const initialState = {
  products: [],
  showDetail: null,
  paginado: [],
  cart: [],
  filtro:"",
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
    case GET_PAGINADO: {
      return {
        ...state,
        paginado: action.payload,
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
    case FILTER_PRICE:{
      return{
        ...state,
        filtro:action.payload
        
      }
    }
    //Default
    default:
      return state;
  }
}
