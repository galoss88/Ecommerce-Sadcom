import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";
import Layout from "../Layout/Layout";

export default function FAQ() {
  const Wrapper = styled.div`
    padding: 23vh 0 10vh 5vw;
    width: 95vw;
  `;
  const Title = styled.h1`
    padding-bottom: 5vh;
  `;
  return (
    <Layout>
      <Wrapper>
        <Title>Preguntas frecuentes</Title>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Pregunta 1</Accordion.Header>
            <Accordion.Body>Respuesta 1</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Pregunta 2</Accordion.Header>
            <Accordion.Body>Respuesta 2</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Wrapper>
    </Layout>
  );
}
