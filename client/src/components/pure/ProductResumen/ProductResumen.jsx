import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductCart } from "../../../redux/actions";
import { quitarDecimales } from "../../../utils/quitarDecimales";
import {
  Cantidad,
  Delete,
  ImagenProduct,
  NameProduct,
  PriceProduct,
  Talle,
  WrapperImageAndNameProduct,
  WrapperImagenProducto,
  WrapperNameAndTalle,
  WrapperPriceProduct,
  WrapperProducto,
} from "./Styles/stylesProductResumen";
import { sumarPrecioTotalIndividual } from "../../../utils/calcularPrecioIndividualProducto";

const ProductResumen = ({ producto }) => {
  const dispatch = useDispatch();
  const { description, unit_price, picture_url, id, title, quantity } =
    producto;
  const [showDelete, setShowDelete] = useState(false);
  const mostrarDelete = () => setShowDelete(true);
  const ocultarDelete = () => setShowDelete(false);
  const deleteProduct = (idProducto) => {
    dispatch(deleteProductCart(idProducto));
  };
  const precioUnitario = quitarDecimales(unit_price);
  const precioTotal = sumarPrecioTotalIndividual(precioUnitario, quantity);
  return (
    <WrapperProducto>
      {/* --------------- */}

      <WrapperImageAndNameProduct>
        <WrapperImagenProducto
          onMouseEnter={mostrarDelete}
          onMouseLeave={ocultarDelete}
        >
          {showDelete ? (
            <Delete onClick={() => deleteProduct(id)}>
              <i className="bi bi-x-circle"></i>
            </Delete>
          ) : (
            <ImagenProduct src={picture_url} alt="sin imagen" />
          )}
          <Cantidad>{quantity}</Cantidad>
        </WrapperImagenProducto>

        <WrapperNameAndTalle>
          <NameProduct>{title}</NameProduct>
          {/* Deberia mostrar un talle, depende de la tienda */}
          {/* {Talle ? <Talle>talle M</Talle> : null} */}
          {/* ---------------------------------------------------- */}
        </WrapperNameAndTalle>
      </WrapperImageAndNameProduct>
      {/* --------------- */}

      <WrapperPriceProduct>
        <PriceProduct>$ {precioTotal}</PriceProduct>
      </WrapperPriceProduct>
      {/* --------------- */}
    </WrapperProducto>
  );
};

export default ProductResumen;
