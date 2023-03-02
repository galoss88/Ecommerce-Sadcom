import React from 'react'
import { WrapperTotal, Total_, TotalPrice } from './styles/stylesTotal'

const Total = () => {
  return (
    <WrapperTotal>
        <Total_>Total: </Total_>
      <TotalPrice>$400</TotalPrice>
    </WrapperTotal>
  )
}

export default Total
