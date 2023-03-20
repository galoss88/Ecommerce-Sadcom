import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPrice, resetFilters } from "../../../redux/actions";
import {
  CampoRadio,
  DivInput,
  InputRadio,
  Label,
} from "./styles/stylesFilters";

export default function FilterPrecio() {
  const dispatch = useDispatch();
  
  const estadoFiltros = useSelector((state) => state.reset);
  const [checkedRadio, setCheckedRadio] = useState("");
  const onClick = (e) => {
    dispatch(filterPrice(e.target.value));
    dispatch(resetFilters("filtrosActivos"));
    setCheckedRadio(e.target.value);
  };

  useEffect(() => {
    if (estadoFiltros === "reset") setCheckedRadio("");
  }, [estadoFiltros]);
  return (
    <CampoRadio>
      <Label>Ordenar por precio</Label>
      <DivInput>
        <InputRadio
          type="radio"
          name="ordenPrecio"
          value="mayorAmenor"
          checked={checkedRadio === "mayorAmenor"}
          onChange={(e) => onClick(e)}
        />
        Mayor a Menor
      </DivInput>
      <DivInput>
        <InputRadio
          type="radio"
          name="ordenPrecio"
          value="menorAmayor"
          checked={checkedRadio === "menorAmayor"}
          onChange={(e) => onClick(e)}
        />
        Menor A Mayor
      </DivInput>
    </CampoRadio>
  );
}
