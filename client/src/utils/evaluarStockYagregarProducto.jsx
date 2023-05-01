import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addProductToCart } from "../redux/actions";

const evaluarStockYagregarProducto = (stock, IdProducto, producto) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { IdArt, Nombre, Detalle, Venta, StockTienda, RutaImagen } = producto;

  const productoCarrito = {
    id: IdArt,
    title: Nombre,
    currency_id: "ARS",
    picture_url: RutaImagen,
    description: Detalle,
    category_id: "art",
    quantity: 0,
    unit_price: Venta,
    StockTienda: StockTienda,
  };

  const agregarProducto = () => {
    const productoEnCarrito = cart.find((p) => p.id === IdProducto);

    if (!productoEnCarrito) {
      if (stock > 0) {
        productoCarrito.quantity = 1;
        dispatch(addProductToCart(productoCarrito));
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Este producto se encuentra sin stock!",
        });
      }
    } else {
      if (productoEnCarrito.quantity < StockTienda) {
        productoEnCarrito.quantity += 1;
        dispatch(addProductToCart(productoEnCarrito));
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hay más stock disponible para este producto!",
        });
      }
    }
  };

  return [agregarProducto];
};

export default evaluarStockYagregarProducto;





//EL NUEVO
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import { addProductToCart } from "../redux/actions";
// import { calcularQuantity } from "./calcularQuantity";

// const evaluarStockYagregarProducto = (stock, IdProducto, producto) => {
//   const dispatch = useDispatch();
//   const productos = useSelector((state) => state.cart);
//   const { IdArt, Nombre, Detalle, Venta, StockTienda, RutaImagen } = producto;
//   const productoExistente = productos.find((p) => p.id === IdProducto);

//   if (productoExistente) {
//     const cantidadTotal = productoExistente.quantity + 1;
//     if (cantidadTotal <= stock) {
//       productoExistente.quantity = cantidadTotal;
//       dispatch({ type: "ACTUALIZAR_PRODUCTO_CARRITO", payload: productos });
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Este producto se encuentra sin stock!",
//       });
//     }
//   } else {
//     const productoCarrito = {
//       id: IdArt,
//       title: Nombre,
//       currency_id: "ARS",
//       picture_url: RutaImagen,
//       description: Detalle,
//       category_id: "art",
//       quantity: 1,
//       unit_price: Venta,
//       StockTienda: StockTienda,
//     };
//     dispatch(addProductToCart(productoCarrito));
//   }
// };

// export default evaluarStockYagregarProducto;





//como estaba antes
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import { addProductToCart } from "../redux/actions";
// import { calcularQuantity } from "./calcularQuantity";

// const evaluarStockYagregarProducto = (stock, IdProducto, producto) => {
//   const dispatch = useDispatch();
//   const productos = useSelector((state) => state.cart);
//   const { IdArt, Nombre, Detalle, Venta, StockTienda, RutaImagen } = producto;
//   const productoCarrito = {
//     id: IdArt,
//     title: Nombre,
//     currency_id: "ARS",
//     picture_url: RutaImagen,
//     description: Detalle,
//     category_id: "art",
//     quantity: 0,
//     unit_price: Venta,
//     StockTienda: StockTienda,
//   };
//   const evaluarStock = () => {
//     if (!productos.length) {
//       return dispatch(addProductToCart(productoCarrito));
//     } else {
//       let contador = 0;
//       //CONTEO DE PRODUCTOS DEL CARRITO
//       for (let i = 0; i < productos.length; i++) {
//         if (productos[i].id === IdProducto) {
//           contador += 1;
          
//         }
//       }

//       if (contador < stock) {

//         return dispatch(addProductToCart(productoCarrito));
//       }
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Este producto se encuentra sin stock!",
//       });
//     }
//   };

//   return [evaluarStock];
// };

// export default evaluarStockYagregarProducto;