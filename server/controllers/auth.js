const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const validateSigninInput = require("../validation/signin");

const handleSignin = (db, req, res) => {
  const { errors, isValid } = validateSigninInput(req.body);

  if (!isValid) {
    return Promise.reject(errors);
  }

  const { username, password } = req.body;

  return db("login")
    .select("*")
    .where({ username })
    .then(data => {
      if (!data[0]) {
        errors.username = "Username does not exist";
        return Promise.reject(errors);
      }
      const { hash } = data[0];
      return bcrypt
        .compare(password, hash)
        .then(isPswdValid => {
          if (isPswdValid) {
            return db("users")
              .select("*")
              .where({ username })
              .then(user => {
                if (!user[0]) {
                  errors.username = "User not found";
                  return Promise.reject(errors);
                }
                return user[0];
              })
              .catch(err => {
                return Promise.reject(err);
              });
          } else {
            errors.password = "Wrong password";
            return Promise.reject(errors);
          }
        })
        .catch(err => {
          return Promise.reject(err);
        });
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

const getAuthTokenId = () => {
  console.log("auth ok");
};

// create and return jwt token
const signToken = id => {
  const jwtPayload = { id };
  // console.log(process.env.JWT_SECRET);
  return jwt.sign(jwtPayload, `${process.env.JWT_SECRET}`, {
    expiresIn: "2 days"
  });
};

//create response after successfully signin
const createSessions = user => {
  const { username, id } = user;
  const token = signToken(id);
  return { success: "true", token: "Bearer " + token };
};

const signinAuth = db => (req, res) => {
  const { authorization } = req.headers;
  return authorization
    ? getAuthTokenId()
    : handleSignin(db, req, req)
        .then(data => {
          return !!data ? createSessions(data) : Promise.reject(data);
        })
        .then(session => {
          return res.json(session);
        })
        .catch(err => {
          console.log("err final:", err);
          return res.status(400).json(err);
        });
};



module.exports = {
  handleSignin,
  signinAuth
};
