const { Router } = require('express');
const router = Router();
const { getConection } = require("../db")
router.get("/", async (req, res)=>{
    const pool = await getConection();
    const result = await pool.request().query("SELECT 1")
    res.status(201).send(result);
});

module.exports = router;
