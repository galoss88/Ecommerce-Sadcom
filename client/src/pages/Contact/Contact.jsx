import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Layout from "../Layout/Layout";

export default function Contact() {
  const Title = styled.h1`
    padding: 23vh 0 5vh 5vw;
  `;

  const [input, setInput] = useState({
    name: "",
    mail: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      errors.name === "Se requiere un nombre" ||
      errors.name === "El nombre debe tener al menos 4 caracteres" ||
      errors.mail === "Se requiere un email" ||
      errors.mail === "Ingrese un email válido" ||
      errors.message === "Ingrese un mensaje con más de 50 caracteres"
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faltan completar campos",
      });
    } else if (input.name === "" && input.mail === "" && input.message === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faltan completar campos",
      });
    } else {
      console.log(input);
      emailjs
        .sendForm(
          "service_t09v4cj",
          "template_qts6jx6",
          e.target,
          "Rc4HvkwJmlJbyGBKL"
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Mensaje enviado con éxito",
      });
      setInput({
        name: "",
        mail: "",
        message: "",
      });
    }
  }

  function validate(input) {
    let errors = [];
    if (!input.name) {
      errors.name = "Se requiere un nombre";
    } else if (input.name.length < 4) {
      errors.name = "El nombre debe tener al menos 4 caracteres";
    }

    if (!input.mail) {
      errors.mail = "Se requiere un email";
    } else if (!input.mail.includes("@")) {
      errors.mail = "Ingrese un email válido";
    }

    if (input.message.length < 50) {
      errors.message = "Ingrese un mensaje con más de 50 caracteres";
    }

    return errors;
  }

  return (
    <Layout>
      <div>
        <Title>Contacto</Title>
        <Form
          style={{ width: "90vw", marginLeft: "5vw" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Nombre y apellido</b>
            </Form.Label>
            <Form.Control
              type="string"
              placeholder="Ingresa tu nombre..."
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && (
              <Form.Text className="text-muted">{errors.name}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Correo electrónico</b>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa un correo válido..."
              name="mail"
              value={input.mail}
              onChange={(e) => handleChange(e)}
            />
            {errors.mail && (
              <Form.Text className="text-muted">{errors.mail}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Mensaje</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Deja tu mensaje..."
              name="message"
              value={input.message}
              onChange={(e) => handleChange(e)}
            />
            {errors.message && (
              <Form.Text className="text-muted">{errors.message}</Form.Text>
            )}
          </Form.Group>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              borderColor: "black",
            }}
            type="submit"
          >
            Enviar
          </Button>
        </Form>
      </div>
    </Layout>
  );
}
