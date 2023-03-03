import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductCart } from "../../../redux/actions";
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
} from "./styles/stylesProduct";

const Product = ({ producto }) => {
  const dispatch = useDispatch();
  const { Detalle, Talle, Venta, IdArt } = producto;
  const [showDelete, setShowDelete] = useState(false);
  const mostrarDelete = () => setShowDelete(true);
  const ocultarDelete = () => setShowDelete(false);
  const deleteProduct = (idProducto) => {
    dispatch(deleteProductCart(idProducto));
  };
  return (
    <WrapperProducto>
      {/* --------------- */}

      <WrapperImageAndNameProduct>
        <WrapperImagenProducto>
          {showDelete ? (
            <Delete
              onClick={() => deleteProduct(IdArt)}
              onMouseLeave={ocultarDelete}
            >
              <i class="bi bi-x-circle"></i>
            </Delete>
          ) : (
            <ImagenProduct
              onMouseEnter={mostrarDelete}
              src=""
              alt="sin imagen"
            />
          )}
          <Cantidad>12</Cantidad>
        </WrapperImagenProducto>
        <WrapperNameAndTalle>
          <NameProduct>{Detalle}</NameProduct>
          {Talle ? <Talle>talle M</Talle> : null}
        </WrapperNameAndTalle>
      </WrapperImageAndNameProduct>
      {/* --------------- */}
      <WrapperPriceProduct>
        <PriceProduct>$ {Venta}</PriceProduct>
      </WrapperPriceProduct>
      {/* --------------- */}
    </WrapperProducto>
  );
};

export default Product;
