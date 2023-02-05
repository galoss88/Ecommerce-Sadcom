import React from "react";
import { CampoRadio, DivInput, InputRadio, Label } from "./styles/stylesFilters";

export default function FilterPrecio() {
  return (
    <CampoRadio>
      <Label>Ordenar por precio</Label>
      <DivInput>
        <InputRadio type="radio" name="ordenPrecio" value="mayorAmenor" />
        Mayor a Menor
      </DivInput>
      <DivInput>
        <InputRadio type="radio" name="ordenPrecio" value="menorAmayor" />
        Menor A Mayor
      </DivInput>
    </CampoRadio>
  );
}
