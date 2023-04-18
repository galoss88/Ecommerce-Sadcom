import mercadopago from "mercadopago";
const accessTokenMP = import.meta.env.VITE_MP_ACCESS_TOKEN;
mercadopago.configure({
  access_token: accessTokenMP,
});
