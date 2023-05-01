const { Router } = require("express");
const route = Router();
const nodemailer = require("nodemailer");
const { ConfiguracionTiendaTbl, PersonaTbl } = require("../../db");
// Configura el transporte
const { EMAIL_COMPRAS, CLAVE_EMAIL_COMPRAS } = require("../../../config");
route.post("/", async (req, res) => {
  try {
    const idEmpresa = await ConfiguracionTiendaTbl.findAll({
      attributes: ["IdEmpresa"],
    });
    const { IdEmpresa } = idEmpresa[0].dataValues;
    const obtenerEmailDueñoEmpresa = await PersonaTbl.findOne({
      where: { IdPersona: IdEmpresa },
    });
    const { Email } = obtenerEmailDueñoEmpresa;
    //-------
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: EMAIL_COMPRAS,
        pass: CLAVE_EMAIL_COMPRAS,
      },
    });

    //lo que llega

    // Nombre: 'Nicolas ivan gallo garcia',
    // [0]   DniCuit: '38800970',
    // [0]   NroTel: '2804954284',
    // [0]   Email: 'gallogarcianicolas@gmail.com',
    // [0]   Domicilio: '13 oeste 1131',
    //       totalVendidos
    //     precioTotal
    // [0]   items: [
    // [0]     {
    // [0]       id: '99',
    // [0]       category_id: '',
    // [0]       currency_id: 'ARS',
    // [0]       description: '',
    // [0]       title: 'AISLANTE TERMICO 10 MM CON ALUMINIO 1 X 20 MTRS ',
    // [0]       quantity: 1,
    // [0]       unit_price: 10
    // [0]     }
    // [0]   ]
    // [0] }
    const {
      Nombre,
      DniCuit,
      NroTel,
      Email: EmailComprador,
      Domicilio,
      items,
      totalVendidos,
      precioTotal,
    } = req.body;

    const productosComprados = items.map((producto) => {
      return `
        Nombre: ${producto.title}
        Cantidad: ${producto.quantity}
        Precio unitario: $${producto.unit_price}
        Precio total: $${producto.unit_price * producto.quantity}
        `;
    });
    const infoProductos = productosComprados.join("\n");
    const datosCompra = `
    Comprador: ${Nombre}
    Dni/Cuit: ${DniCuit}
    Celular/Telefono: ${NroTel}
    Email: ${EmailComprador}
    Domicilio: ${Domicilio}
    Compra: ${infoProductos}
    Cantidad total de unidades vendidas: ${totalVendidos}
    Valor total de la venta: $${precioTotal}    
    `;
    //Crea un objeto de correo electrónico
    // const mailOptions = {
    //   from: EMAIL_COMPRAS,
    //   to: Email,
    //   subject: `Mensaje de "Tienda Festilandia Cotillon" ("Venta de Productos")`,
    //   text: datosCompra,
    // };
    // // Envía el correo electrónico
    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //     res.status(500).send("Error al enviar el correo electrónico");
    //   } else {
    //     console.log("Correo electrónico enviado: " + info.response);
    //     res.status(200).send("Correo electrónico enviado");
    //   }
    // });
    res.status(200).json(datosCompra);
  } catch (e) {
    res.status(404).json({ e: e.message });
  }
});

module.exports = route;
