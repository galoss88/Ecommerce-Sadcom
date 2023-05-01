import React from "react";
import {
  ContainerResumenCompra,
  WrapperLabel,
  Label,
  WrapperResumen,
  Valor,
  Title,
} from "../components/pure/FacturaProb/style/styleResumen";

import { useSelector } from "react-redux";

const useResumenCompra = () => {
  const datosCompra = useSelector((state) => state.datosCompra);
  const dataEmpresa = useSelector((state) => state.dataEmpresa);
  const { Nombre, DniCuit, Domicilio, items, Email, NroTel, precioTotal } =
    datosCompra;
  const {
    IdPersona: IdPersona_Empresa,
    Nombre: Nombre_Empresa,
    DniCuit: Dni_Empresa,
    Email: Email_Empresa,
    Domicilio: Domicilio_Empresa,
    IdClaseTel: IdClaseTel_Empresa,
    NroTel: NroTel_Empresa,
    IdLocalidad: IdLocalidad_Empresa,
    IdCondTrib: IdCondTrib_Empresa,
    IdPersonaCategoria: IdPersonaCategoria_Empresa,
    IdCajaCtaCte: IdCajaCtaCte_Empresa,
  } = dataEmpresa;

  const dataResumen = [
    { label: <b>{`Nombre:`}</b>, value: Nombre },
    { label: <b>{`Dni/Cuit:`}</b>, value: DniCuit },
    { label: <b>{`Domicilio:`}</b>, value: Domicilio },
    { label: <b>{`Email:`}</b>, value: Email },
    { label: <b>{`NroTel:`}</b>, value: NroTel },
    {
      label: <b>{`Su compra:`}</b>,
      value: items.map(({ title, quantity, unit_price }, index) => (
        <div key={index}>
          <p>{`${title}`}</p>
          <p>
            {`Cantidad:`} {`${quantity}`}
          </p>

          <p>
            <b>{`Precio Total:`}</b> $ {`${unit_price * quantity}`}
          </p>
          <hr />
          <br />
        </div>
      )),
    },
    { label: <b>{`Precio total:`}</b>, value: `$ ${precioTotal}` },
  ];
  const crearResumen = () => (
    <ContainerResumenCompra>
      <WrapperResumen>
        <Title>Resumen de su compra</Title>
        {dataResumen.map(({ label, value }, index) => (
          <WrapperLabel key={index}>
            <Label>
              {label} <Valor> {value}</Valor>
            </Label>
          </WrapperLabel>
        ))}
      </WrapperResumen>
    </ContainerResumenCompra>
  );
  return [crearResumen];
};

export default useResumenCompra;
