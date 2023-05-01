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
  GET_DATA_USER,
  GUARDAR_DATOS_COMPRA,
  GET_DATA_EMPRESA,
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
  // probando: null,
  loginToken: "",
  imagenes: [],
  datosCompra: {},
  dataEmpresa: {},
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
    case GET_DATA_EMPRESA: {
      return {
        ...state,
        dataEmpresa: action.payload,
      };
    }
    case GUARDAR_DATOS_COMPRA: {
      return {
        ...state,
        datosCompra: action.payload,
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
      const newProduct = action.payload;
      const productIndex = state.cart.findIndex(
        (product) => product.id === newProduct.id
      );

      if (productIndex !== -1) {
        const updatedProduct = {
          ...state.cart[productIndex],
          quantity: newProduct.quantity,
        };

        const cart = [...state.cart];
        cart.splice(productIndex, 1, updatedProduct);

        return {
          ...state,
          cart: cart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      }
    }

    case VACIAR_CARRITO: {
      return {
        ...state,
        cart: [],
      };
    }
    case DELETE_PRODUCT_CART: {
      const idEliminar = action.payload;
      const productos = state.cart
        .map((producto) => {
          if (producto.id === idEliminar) {
            if (producto.quantity > 2) {
              return { ...producto, quantity: producto.quantity - 1 };
            } else if (producto.quantity === 2) {
              return { ...producto, quantity: producto.quantity - 1 };
            } else {
              return null;
            }
          }
          return producto;
        })
        .filter((producto) => producto !== null);
      return {
        ...state,
        cart: productos,
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
    case GET_DATA_USER: {
      return {
        ...state,
        usuario: action.payload,
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
