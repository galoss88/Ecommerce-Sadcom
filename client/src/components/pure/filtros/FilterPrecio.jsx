import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPrice } from "../../../redux/actions";
import {
  CampoRadio,
  DivInput,
  InputRadio,
  Label,
} from "./styles/stylesFilters";

export default function FilterPrecio() {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(filterPrice(e.target.value));
  };
  return (
    <CampoRadio>
      <Label>Ordenar por precio</Label>
      <DivInput>
        <InputRadio
          type="radio"
          name="ordenPrecio"
          value="mayorAmenor"
          onClick={(e) => onChange(e)}
        />
        Mayor a Menor
      </DivInput>
      <DivInput>
        <InputRadio
          type="radio"
          name="ordenPrecio"
          value="menorAmayor"
          onClick={(e) => onChange(e)}
        />
        Menor A Mayor
      </DivInput>
    </CampoRadio>
  );
}
