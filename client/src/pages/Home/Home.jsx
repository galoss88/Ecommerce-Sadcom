import styled from "styled-components";
import image from "./image/pexels-photo-7153908.png";
import Searcher from "../../components/pure/searcher/Searcher";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cargarImagenes } from "../../redux/actions";

export default function Home() {
  const imagenes = useSelector((state) => state.imagenes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cargarImagenes());
  }, []);
  // const { RutaBanner, NombreTienda } = imagenes[0];
  const Wrapper = styled.div`
    background-image: url(${imagenes[0]?.RutaBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 75%;
    height: 100vh;
    animation: home 1s ease-in-out 0s 1 alternate none;
    @keyframes home {
      0% {
        opacity: 0;
        transform: scale(1.4);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @media (max-width: 768px) {
      background-position: bottom;
    }
  `;
  const Detail = styled.div`
    padding-top: 35vh;
    padding-left: 5vw;
    width: 35vw;
    @media (max-width: 768px) {
      padding-top: 10vh;
      width: 70vw;
      font-weight: 100;
      font-size: 1.2rem;
      line-height: normal;
    }
  `;
  const Button = styled.button`
    width: 15vw;
    height: 8vh;
    color: #6f0000;
    border-style: solid;
    border-color: #6f0000;
    border-radius: 0;
    border-width: 1px;
    background-color: transparent;
    :hover {
      background-color: #6f0000;
      color: #fff;
    }
    @media (max-width: 768px) {
      display: none;
    }
  `;
  const SecondBlock = styled.div`
    height: 100vh;
    background-color: #f2f2f2;
  `;
  const Title = styled.h2`
    text-align: center;
    padding: 5vh 0 5vh 0;
  `;
  const ResponsiveSearcher = styled.div`
    display: none;
    @media (max-width: 768px) {
      display: flex;
      background-color: rgba(242, 242, 242, 0.5);
      padding: 5px 0 5px 25vw;
    }
  `;
  //navigate
  const navigate = useNavigate();
  return (
    <div>
      <Wrapper>
        <Detail>
          <h1>
            <b>Algo</b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            neque, eaque numquam minima nesciunt vero doloribus dolores ipsam
            esse? Esse error magnam accusamus laudantium assumenda beatae est in
            quia nemo!
          </p>
          <Button onClick={() => navigate("/productos/listaProductos")}>
            Ver productos
          </Button>
        </Detail>
      </Wrapper>
      <SecondBlock>
        <Title>Más vendido</Title>
      </SecondBlock>
    </div>
  );
}
