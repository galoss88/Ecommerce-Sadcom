import React from "react";
import {
  ContainerLoading,
  TextoLoading,
  WrapperSpinnerLoading,
} from "./stylesLoading";
import Spinner from "react-bootstrap/Spinner";
const Loading = ({texto}) => {
  return (
    <ContainerLoading>
      <TextoLoading>{texto}</TextoLoading>
      <WrapperSpinnerLoading>
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
      </WrapperSpinnerLoading>
    </ContainerLoading>
  );
};

export default Loading;
