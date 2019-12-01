require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mysql = require("../mysql");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      mysql
        .db("users")
        .select("*")
        .where({ id: jwt_payload.id })
        .then(user => {
          if (user[0]) {
            return done(null, user[0]);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
