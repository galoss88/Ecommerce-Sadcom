const { Router } = require("express");
const express = require("express");
const router = Router();
const paginado = require("./Paginado/Paginado.js")
const productos = require("./Productos/Productos.js")
router.use(express.json());
router.use("/paginado",paginado)
router.use("/productos", productos)



module.exports = router;
