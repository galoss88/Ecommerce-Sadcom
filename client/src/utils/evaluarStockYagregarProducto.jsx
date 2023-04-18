import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addProductToCart } from "../redux/actions";

const evaluarStockYagregarProducto = (stock, IdProducto, producto) => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.cart);
  const { IdArt, Nombre, Detalle, Venta, StockTienda } = producto;
  const productoCarrito = {
    id: IdArt,
    title: Nombre,
    currency_id: "ARS",
    picture_url:
      "https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png",
    description: Detalle,
    category_id: "art",
    quantity: 1,
    unit_price: Venta,
    StockTienda: StockTienda,
  };
  const evaluarStock = () => {
    if (!productos.length) {
      return dispatch(addProductToCart(productoCarrito));
    } else {
      let contador = 0;
      //CONTEO DE PRODUCTOS DEL CARRITO
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === IdProducto) {
          contador += 1;
        }
      }
      
      if (contador < stock) {
        return dispatch(addProductToCart(productoCarrito));
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este producto se encuentra sin stock!",
      });
    }
  };

  return [evaluarStock];
};

export default evaluarStockYagregarProducto;
