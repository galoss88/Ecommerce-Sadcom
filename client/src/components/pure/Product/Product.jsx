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
} from "./styles/stylesProduct";

const Product = ({ producto, conteoProductos }) => {
  const dispatch = useDispatch();
  const { Detalle, Talle, Venta, IdArt } = producto;
  const [showDelete, setShowDelete] = useState(false);
  const mostrarDelete = () => setShowDelete(true);
  const ocultarDelete = () => setShowDelete(false);
  const deleteProduct = (idProducto) => {
    dispatch(deleteProductCart(idProducto));
  };
  const cantidadProducto = conteoProductos[IdArt];
  const precio = quitarDecimales(Venta);

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
              <i className="bi bi-x-circle"></i>
            </Delete>
          ) : (
            <ImagenProduct
              onMouseEnter={mostrarDelete}
              src=""
              alt="sin imagen"
            />
          )}
          <Cantidad>{cantidadProducto}</Cantidad>
        </WrapperImagenProducto>
        <WrapperNameAndTalle>
          <NameProduct>{Detalle}</NameProduct>
          {/* Deberia mostrar un talle, depende de la tienda */}
          {Talle ? <Talle>talle M</Talle> : null}
          {/* ---------------------------------------------------- */}
        </WrapperNameAndTalle>
      </WrapperImageAndNameProduct>
      {/* --------------- */}
      <WrapperPriceProduct>
        <PriceProduct>$ {precio}</PriceProduct>
      </WrapperPriceProduct>
      {/* --------------- */}
    </WrapperProducto>
  );
};

export default Product;
