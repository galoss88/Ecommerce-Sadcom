export const calcularProductosCarrito = (productosSinRepetir)=>{
    let contador;
 const productos = Object.values(productosSinRepetir)
 const sumarCantidades = productos.reduce((acumulador, cantidad)=>{
    return acumulador + cantidad
 })
 return sumarCantidades
}