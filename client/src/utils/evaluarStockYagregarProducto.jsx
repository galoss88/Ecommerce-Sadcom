import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addProductToCart } from "../redux/actions";

const evaluarStockYagregarProducto = (stock, IdProducto, producto) => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.cart);
  const evaluarStock = () => {
    if (!productos.length) {
      return dispatch(addProductToCart(producto));
    } else {
      let contador = 0;
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].IdArt === IdProducto) {
          contador += 1;
        }
      }
      if (contador < stock) {
        return dispatch(addProductToCart(producto));
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
