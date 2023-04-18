const { SECRET_KEY: secretKey } = require("../config.js");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const Persona = require("./models/PersonaTbl.js");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretKey; // Reemplazar con tu clave secreta

passport.use(
  new JWTStrategy(opts, async (jwtPayload, done) => {
    try {
      const user = await Persona.findByPk(jwtPayload.sub);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (error) {
      done(error, false);
    }
  })
);

module.exports = passport;
