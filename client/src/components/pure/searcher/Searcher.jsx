import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

export default function Searcher() {
  return (
    <Form className="d-flex" style={{ "padding-right": "30vw" }}>
      <Form.Control
        type="search"
        placeholder="Buscar..."
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-secondary">Ir</Button>
    </Form>
  );
}
