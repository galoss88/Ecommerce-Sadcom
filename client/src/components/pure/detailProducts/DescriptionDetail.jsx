import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../redux/actions";
import { quitarDecimales } from "../../../utils/quitarDecimales";
import {
  Container,
  ButtonAñadirCarrito,
  Titulo,
  WrapperButtonCarrito,
  WrapperDescriptionProducto,
  WrapperHeaderCard,
  WrapperInfoProducto,
  WrapperTalleCantidad,
  Description,
  AcercaDeProdcuto,
  PriceProduct,
  Selector,
  LabelSelect,
  WrapperSelector,
} from "./styles/stylesDescription";

const DescriptionDetail = (props) => {
  const { Detalle, Venta } = props;
  const precio = quitarDecimales(Venta);
  const dispatch = useDispatch();
  const addToCart = (producto) => {
    if(producto.StockTienda)
    dispatch(addProductToCart({ ...producto }));
  };
  return (
    <Container>
      <WrapperHeaderCard>
        <AcercaDeProdcuto>Precio</AcercaDeProdcuto>
        <PriceProduct>$ {precio}</PriceProduct>
      </WrapperHeaderCard>
      <WrapperInfoProducto>
        <Titulo>{Detalle}</Titulo>
        <WrapperDescriptionProducto>
          <Description>{Detalle}</Description>
        </WrapperDescriptionProducto>
        <WrapperTalleCantidad>
          {/* Por ahora sin selectores */}
          {/* <WrapperSelector>
            <LabelSelect>Cantidad</LabelSelect>
            <Selector>
              <option>Default</option>
            </Selector>
          </WrapperSelector> */}
        </WrapperTalleCantidad>
        <WrapperButtonCarrito>
          <ButtonAñadirCarrito onClick={() => addToCart(props)}>
            <i className="bi bi-cart-fill"></i>Añadir al carrito
          </ButtonAñadirCarrito>
        </WrapperButtonCarrito>
      </WrapperInfoProducto>
    </Container>
  );
};

export default DescriptionDetail;
