import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCart, seleccionarProducto } from "../../../redux/actions";
import { calcularProductosRepetidos } from "../../../utils/calcularProductosRepetidos";
import { eliminarRepetidos } from "../../../utils/eliminarProductoRepetido";
import { sumarPrecios } from "../../../utils/evaluarStockCarrtito";
import { quitarDecimales } from "../../../utils/quitarDecimales";
import {
  ButtonAddToCart,
  Card,
  ImgProduct,
  // NamePrice,
  NameProduct,
  PriceProduct,
  Stock,
  WrapperCard,
} from "./stylesCardProduct";
const CardProduct = ({ producto }) => {
  const { Detalle, StockTienda, Venta } = producto;
  const dispatch = useDispatch();
  const productosEnCarrito = useSelector((state) => state.cart);
  const productosSinRepetir = eliminarRepetidos(productosEnCarrito);
  const conteoProductosCarrito = calcularProductosRepetidos(productosEnCarrito);
  
  const addToCart = (producto) => {
    // if(producto.StockTienda >)
    dispatch(addProductToCart({ ...producto }));
  };
  const navigate = useNavigate();
  const verDetalles = () => {
    navigate("/detailProduct");
    dispatch(seleccionarProducto(producto.IdArt));
  };
  const precio = quitarDecimales(Venta);
  return (
    <Card>
      <WrapperCard onClick={() => verDetalles()}>
        <ImgProduct
          src="https://www.ansilta.com/img/articulos/2022/01/campera_crux_imagen18.jpg"
          alt="sin imagen"
        ></ImgProduct>
        <NameProduct>{Detalle}</NameProduct>
        <Stock stock={StockTienda}>
          {StockTienda ? "Quedan " + StockTienda : "Sin stock"}
        </Stock>
        {/* <NamePrice>Precio:</NamePrice> */}
        <PriceProduct>$ {precio}</PriceProduct>
      </WrapperCard>

      <ButtonAddToCart onClick={() => addToCart(producto)}>
        <i className="bi bi-cart-plus"></i>
      </ButtonAddToCart>
    </Card>
  );
};

export default CardProduct;
