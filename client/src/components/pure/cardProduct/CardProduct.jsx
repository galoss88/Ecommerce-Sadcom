import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCart, seleccionarProducto } from "../../../redux/actions";
import { calcularProductosRepetidos } from "../../../utils/calcularProductosRepetidos";
import { eliminarRepetidos } from "../../../utils/eliminarProductoRepetido";
import { sumarPrecios } from "../../../utils/sumarPrecios";
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
import evaluarStockYagregarProducto from "../../../utils/evaluarStockYagregarProducto";
const CardProduct = ({ producto }) => {
  const { Detalle, StockTienda, Venta, IdArt } = producto;
  const dispatch = useDispatch();
  const productosEnCarrito = useSelector((state) => state.cart);
  const productosSinRepetir = eliminarRepetidos(productosEnCarrito);
  const conteoProductosCarrito = calcularProductosRepetidos(productosEnCarrito);
  const [agregarProducto] = evaluarStockYagregarProducto(
    StockTienda,
    IdArt,
    producto
  );
  const addToCart = () => {
    agregarProducto();
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

      <ButtonAddToCart onClick={() => addToCart()}>
        <i className="bi bi-cart-plus"></i>
      </ButtonAddToCart>
    </Card>
  );
};

export default CardProduct;
