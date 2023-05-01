import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDetailProduct } from "../../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { showDetail } from "../../../redux/actions";
import ButtonNavigate from "../../pure/ButtonAtras.jsx/ButtonAtras";
import DescriptionDetail from "../../pure/detailProducts/DescriptionDetail";
import ImagesDetail from "../../pure/detailProducts/ImagesDetail";
import {
  Container,
  ContainerButton,
  ContainerDescription,
  ContainerDetail,
  ContainerImageDetail,
} from "./stylesDetailProducts";
import Layout from "../../../pages/Layout/Layout";

const DetailProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showDetailProduct());
  }, []);
  const productDetail = useSelector(
    (state) => state.detalleProductoSeleccionado
  );
  return (
    <Layout>
      <Container>
        <ContainerButton>
          <ButtonNavigate accion={-1} />
        </ContainerButton>
        <ContainerDescription>
          <ContainerImageDetail>
            <ImagesDetail />
          </ContainerImageDetail>
          <ContainerDetail>
            <DescriptionDetail {...productDetail} />
          </ContainerDetail>
        </ContainerDescription>
      </Container>
    </Layout>
  );
};

export default DetailProducts;
