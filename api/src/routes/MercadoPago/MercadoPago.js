const { Router } = require("express");
const mercadopago = require("mercadopago");
const route = Router();

route.post("/webhooks/mercadopago", (req, res) => {
  // Aquí maneja la respuesta de Mercado Pago
  res.send("hola");
});
route.post("/payment", async (req, res) => {
  // Aquí crea la preferencia de pago en Mercado Pago y devuelve su ID
  //***CONFIGURAAAAAAAAAAAAR CON EL CARRITO DE COPMPRAS */
  const prod = req.body.carrito;
  const items = prod.map((producto, index) => {
    return {
      id: producto.id,
      title: producto.title,
      currency_id: "ARS",
      picture_url: producto.picture_url,
      description: producto.description,
      category_id: "art",
      quantity: 1,
      unit_price: producto.unit_price,
    };
  });
  let preferences = {
    items: items,
    //redirigir a paginas, cuando es exitoso, falla o esta en pendiente.
    back_urls: {
      success: "http://localhost:5173/pago-exitoso",
      failure: "http://localhost:5173/pago-fallido",
      pending: "http://localhost:5173/pago-pendiente",
    },
    auto_return: "approved",
    //METODOS DE PAGO ACEPTADOS
    payment_methods: {
      excluded_payment_types: [
        {
          id: "atm",
        },
      ],
    },
    external_reference: "CompraFestilandia",
    //URL PARA notificar el estado del pago!!
    notification_url: "http://localhost:4000/webhooks/mercadopago",
    binary_mode: true, //unicamente pago con tarjetas, no efectivo, pagos en el momento, nada de pendientes en efectivo.
  };
  mercadopago.preferences
    .create(preferences)
    .then((resp) => res.status(200).send({ resp }))
    .catch((e) => res.status(400).send({ error: e.message }));
});

module.exports = route;
