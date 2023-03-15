const actualizarPrecio = (precios, id)=>{
    const arrayPrecios = Array.from(precios)
    const precioActual = arrayPrecios?.find(producto => producto.IdArt === id)
    return precioActual
}
export default actualizarPrecio