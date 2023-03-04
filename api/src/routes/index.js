const { Router } = require("express");
const express = require("express");
const router = Router();
const paginado = require("./Paginado/Paginado.js");
const productos = require("./Productos/Productos.js");
const filtros = require("./filtros/Filtros.js");
router.use(express.json());
// router.use("/listaProductos", paginado);
router.use("/productos", productos);
// router.use("/listaProductos", filtros);

module.exports = router;
