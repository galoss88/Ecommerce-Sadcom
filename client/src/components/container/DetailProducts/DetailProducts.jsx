import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showDetail } from "../../../redux/actions";
import ButtonAtras from "../../pure/ButtonAtras.jsx/ButtonAtras";
import DescriptionDetail from "../../pure/detailProducts/DescriptionDetail";
import ImagesDetail from "../../pure/detailProducts/ImagesDetail";
import { Container, ContainerButton } from "./stylesDetailProducts";

const DetailProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const backProduct = () => {
    dispatch(showDetail(false));
    navigate(-1);
  };
  return (
    <Container>
      <ContainerButton>
        <ButtonAtras funcion={backProduct}/>
      </ContainerButton>

      <ImagesDetail />
      <DescriptionDetail />
    </Container>
  );
};

export default DetailProducts;
