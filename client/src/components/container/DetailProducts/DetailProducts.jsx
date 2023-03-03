import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showDetail } from "../../../redux/actions";
import ButtonAtras from "../../pure/ButtonAtras.jsx/ButtonAtras";
import DescriptionDetail from "../../pure/detailProducts/DescriptionDetail";
import ImagesDetail from "../../pure/detailProducts/ImagesDetail";
import {
  Container,
  ContainerButton,
  ContainerDescription,
  ContainerDetail,
  ContainerImageDetail,
} from "./stylesDetailProducts";

const DetailProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // useEffect(() => {
  
  //   // dispatch(showDetail(true));
  // }, []);
  const backProduct = () => {
    dispatch(showDetail(false));
    
  };
  return (
    <Container>
      <ContainerButton>
        <ButtonAtras funcion={backProduct} />
      </ContainerButton>
      <ContainerDescription>
        <ContainerImageDetail>
          <ImagesDetail />
        </ContainerImageDetail>
        <ContainerDetail>
          <DescriptionDetail />
        </ContainerDetail>
      </ContainerDescription>
    </Container>
  );
};

export default DetailProducts;
