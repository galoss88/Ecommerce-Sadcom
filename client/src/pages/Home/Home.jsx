// import styled from "styled-components";
// import image from "./image/pexels-photo-7153908.png";
// import Searcher from "../../components/pure/searcher/Searcher";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cargarImagenes } from "../../redux/actions";
import {
  Detail,
  SecondBlock,
  Title,
  Wrapper,
  Button,
  ContainerHome,
} from "./style/home";
import Layout from "../Layout/Layout";

export default function Home() {
  const imagenes = useSelector((state) => state.imagenes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cargarImagenes());
  }, []);

  //navigate
  const navigate = useNavigate();
  return (
    <Layout>
      <ContainerHome>
        <Wrapper RutaBanner={imagenes[0]?.RutaBanner}>
          <Detail>
            <h1>
              <b>{imagenes[0]?.TituloBanner}</b>
            </h1>
            <p>{imagenes[0]?.DescripcionBanner}</p>
            <Button onClick={() => navigate("/listaProductos")}>
              Ver productos
            </Button>
          </Detail>
        </Wrapper>
        <SecondBlock>
          <Title>Más vendido</Title>
        </SecondBlock>
      </ContainerHome>
    </Layout>
  );
}
