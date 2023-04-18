// import { checkout } from "../../../../../api/src/routes";
const { VITE_PUBLIC_KEY } = import.meta.env.VITE_PUBLIC_KEY;

export const Checkout = async (carrito) => {
  const response = await fetch("http://localhost:4000/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      carrito,
      // Aquí se especifica el monto y los detalles del pago
    }),
  });
  const preference = await response.json();
  return (window.location.href = preference.resp.body.init_point);


};
