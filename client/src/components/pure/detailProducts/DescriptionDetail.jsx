import React from "react";
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

const DescriptionDetail = () => {
  return (
    <Container>
      <WrapperHeaderCard>
        <AcercaDeProdcuto>Acerca de producto</AcercaDeProdcuto>
        <PriceProduct>$500000</PriceProduct>
      </WrapperHeaderCard>
      <WrapperInfoProducto>
        <Titulo>Nombre Producto</Titulo>
        <WrapperDescriptionProducto>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            at natus repellat unde commodi laborum dignissimos laboriosam saepe
            quam voluptas eveniet eius perferendis reprehenderit, molestias
            beatae velit cumque adipisci nisi.
          </Description>
        </WrapperDescriptionProducto>
        <WrapperTalleCantidad>
          <WrapperSelector>
            <LabelSelect>Talle</LabelSelect>
            <Selector>
              <option>Default</option>
            </Selector>
          </WrapperSelector>
          <WrapperSelector>
            <LabelSelect>Cantidad</LabelSelect>
            <Selector>
              <option>Default</option>
            </Selector>
          </WrapperSelector>
        </WrapperTalleCantidad>
        <WrapperButtonCarrito>
          <ButtonAñadirCarrito>
            <i class="bi bi-cart-fill"></i>Añadir al carrito
          </ButtonAñadirCarrito>
        </WrapperButtonCarrito>
      </WrapperInfoProducto>
    </Container>
  );
};

export default DescriptionDetail;
