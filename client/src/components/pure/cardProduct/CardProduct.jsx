import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../redux/actions";
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
const CardProduct = ({ producto, mostrarDetalle }) => {
  const { Detalle, EstadoArt, Venta } = producto;
  const dispatch = useDispatch();
  const addToCart = (producto) => {
    dispatch(addProductToCart(producto));
  };
  return (
    <Card>
      <WrapperCard onClick={() => mostrarDetalle()}>
        <ImgProduct
          src="https://www.ansilta.com/img/articulos/2022/01/campera_crux_imagen18.jpg"
          alt="sin imagen"
        ></ImgProduct>
        <NameProduct>{Detalle}</NameProduct>
        <Stock stock={EstadoArt}>{EstadoArt ? "En stock" : "Sin stock"}</Stock>
        {/* <NamePrice>Precio:</NamePrice> */}
        <PriceProduct>$ {Venta}</PriceProduct>
      </WrapperCard>

      <ButtonAddToCart onClick={() => addToCart(producto)}>
        <i class="bi bi-cart-plus"></i>
      </ButtonAddToCart>
    </Card>
  );
};

export default CardProduct;
