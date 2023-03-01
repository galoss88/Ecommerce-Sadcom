const { Router } = require("express");
const router = Router();
const {ArticuloTbl, ArticuloIvaTbl} = require("../db")





//Rutas De prueba que traen datos!
// router.get("/", async (req, res) => {
//  const data = await ArticuloTbl.findAll()
//  res.json(data)
// });

// router.get("/prueba", async (req, res) => {
//     const datas = await ArticuloIvaTbl.findAll()
//     res.json(datas)
//    });

module.exports = router;
