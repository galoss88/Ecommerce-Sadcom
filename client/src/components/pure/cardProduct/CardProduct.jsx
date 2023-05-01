import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCart, seleccionarProducto } from "../../../redux/actions";
// import { calcularProductosRepetidos } from "../../../utils/calcularProductosRepetidos";
// import { eliminarRepetidos } from "../../../utils/eliminarProductoRepetido";
// import { sumarPrecios } from "../../../utils/sumarPrecios";
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
// import obtenerPrecioActual from "../../../utils/actualizarPrecio";
const CardProduct = ({ producto, actualizarPrecio }) => {
  const { Nombre, Detalle, StockTienda, IdArt, Venta, RutaImagen } = producto;
  const dispatch = useDispatch();
  // const productosEnCarrito = useSelector((state) => state.cart);
  // const productosSinRepetir = eliminarRepetidos(productosEnCarrito);
  // const conteoProductosCarrito = calcularProductosRepetidos(productosEnCarrito);
  const [agregarProducto] = evaluarStockYagregarProducto(
    StockTienda,
    IdArt,
    producto,
    RutaImagen
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

  const precioSocket = actualizarPrecio
    ? quitarDecimales(actualizarPrecio.Venta)
    : precio;
  return (
    <Card>
      <WrapperCard onClick={() => verDetalles()}>
        <ImgProduct
          src={RutaImagen}
          alt="Imagen del producto"
          loading="lazy"
        ></ImgProduct>
        <NameProduct>
          {Detalle}
          {Nombre}
        </NameProduct>
        {/* <Stock stock={StockTienda}>
          {StockTienda ? "Quedan " + StockTienda : "Sin stock"}
        </Stock> */}
        {/* <NamePrice>Precio:</NamePrice> */}
        {/* //precio sin socket io */}
        {precioSocket ? (
          <PriceProduct>$ {precioSocket}</PriceProduct>
        ) : (
          <PriceProduct>$ {precio}</PriceProduct>
        )}
        {/* <PriceProduct>$ {precio}</PriceProduct> */}
        {/* actualizar precio con socket io */}
      </WrapperCard>

      <ButtonAddToCart onClick={() => addToCart()}>
        <i className="bi bi-cart-plus"></i>
      </ButtonAddToCart>
    </Card>
  );
};

export default CardProduct;
