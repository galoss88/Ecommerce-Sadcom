import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addProductToCart } from "../redux/actions";

const evaluarStockYagregarProducto = (stock, IdProducto, producto) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { IdArt, Nombre, Detalle, Venta, StockTienda, RutaImagen } = producto;

  const productoCarrito = {
    id: IdArt,
    title: Nombre,
    currency_id: "ARS",
    picture_url: RutaImagen,
    description: Detalle,
    category_id: "art",
    quantity: 0,
    unit_price: Venta,
    StockTienda: StockTienda,
  };

  const agregarProducto = () => {
    const productoEnCarrito = cart.find((p) => p.id === IdProducto);

    if (!productoEnCarrito) {
      if (stock > 0) {
        productoCarrito.quantity = 1;
        dispatch(addProductToCart(productoCarrito));
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Este producto se encuentra sin stock!",
        });
      }
    } else {
      if (productoEnCarrito.quantity < StockTienda) {
        productoEnCarrito.quantity += 1;
        dispatch(addProductToCart(productoEnCarrito));
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hay más stock disponible para este producto!",
        });
      }
    }
  };

  return [agregarProducto];
};

export default evaluarStockYagregarProducto;
