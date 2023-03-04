const { Router } = require("express");
const express = require("express");
const router = Router();
const productos = require("./Productos/Productos.js");
router.use(express.json());
// router.use("/listaProductos", paginado);
router.use("/productos", productos);
// router.use("/listaProductos", filtros);

module.exports = router;
