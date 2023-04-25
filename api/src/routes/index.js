const { Router } = require("express");
const express = require("express");
const router = Router();
const productos = require("./Productos/Productos.js");
const login = require("./Login/Login.js");
const mercadopago = require("./MercadoPago/MercadoPago.js");
const images = require("./Images/Images.js");
const protegerRuta = require("../jwt/jwt.js");
const getInfoUser = require("../controllers/getInfoUser.js");
// const passport = require("../passport");
router.use(express.json());
// router.use("/listaProductos", paginado);
router.use("/productos", productos);
// router.use("/listaProductos", filtros);
router.use(
  "/login",

  // passport.authenticate("jwt", { session: false }),
  login
);
router.use("/dataUser", getInfoUser);
router.use("/", mercadopago);
router.use("/images", images);
module.exports = router;
