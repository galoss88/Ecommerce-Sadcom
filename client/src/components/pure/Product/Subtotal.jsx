import React from "react";
import { WrapperSubtotal, Subtotal_, SubtotalPrice } from "./styles/stylesSubtotal";

const Subtotal = () => {
  return (
    <WrapperSubtotal>
      <Subtotal_>Subtotal: </Subtotal_>
      <SubtotalPrice>$ 0</SubtotalPrice>
    </WrapperSubtotal>
  );
};

export default Subtotal;
