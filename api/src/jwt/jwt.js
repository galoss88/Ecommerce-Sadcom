const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../../config");

function protegerRuta(req, res, next) {
  // Obtener el token de la cabecera de la solicitud
  const token = req.headers.authorization?.split(' ')[1];

  // Si no hay token, enviar una respuesta de error
  if (!token) {
    return res.status(401).json({ mensaje: 'No se proporcionó un token de autenticación' });
  }

  try {
    // Verificar el token utilizando la clave secreta
    const decoded = jwt.verify(token, JWT_SECRET);

    // Guardar los datos del usuario en la solicitud para que puedan ser utilizados en rutas posteriores
    req.usuario = decoded;

    // Llamar al siguiente middleware
    next();
  } catch (error) {
    // Si el token no es válido, enviar una respuesta de error
    return res.status(401).json({ mensaje: 'Token de autenticación inválido' });
  }
}

module.exports = protegerRuta;