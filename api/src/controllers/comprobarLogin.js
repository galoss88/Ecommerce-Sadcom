const jwt = require("jsonwebtoken");
const config = require("../../config"); // clave secreta para firmar el token
const comprobarLogin = (req, res) => {
  console.log("viendo usuario", req.body);
  console.log("hohollala");
  const { JWT_SECRET } = config;
  try {
    // Generar el token con la información necesaria
    const payload = req.body;
    const options = { expiresIn: "5h" };
    const token = jwt.sign(payload, JWT_SECRET, options);
    console.log({ token });
    res.status(200).json({ token });
  } catch (e) {
    res.status(400).json("Error al logear");
  }
};

module.exports = comprobarLogin;
