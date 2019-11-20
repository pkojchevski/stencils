const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleSignin = async (db, req, res) => {
  const { password, username } = req.body;
  return db("login")
    .select("*")
    .where({ username })
    .then(data => {
      const { hash } = data[0];
      return bcrypt
        .compare(password, hash)
        .then(isValid => {
          if (isValid) {
            return db("users")
              .select("*")
              .where({ username })
              .then(user => user[0])
              .catch(err => Promise.reject("unable to get user"));
          } else {
            return Promise.reject("wrong credentials");
          }
        })
        .catch(err => Promise.reject("wrong password"));
    })
    .catch(err => Promise.reject("wrong credentials"));
};

const getAuthTokenId = () => {
  console.log("auth ok");
};

// create and return jwt token
const signToken = username => {
  const jwtPayload = { username };
  // console.log(process.env.JWT_SECRET);
  return jwt.sign(jwtPayload, `${process.env.JWT_SECRET}`, {
    expiresIn: "2 days"
  });
};

//create response after successfully signin
const createSessions = user => {
  const { username, id } = user;
  const token = signToken(username);
  return { success: "true", userId: id, token };
};

const signinAuth = db => (req, res) => {
  const { authorization } = req.headers;
  return authorization
    ? getAuthTokenId()
    : handleSignin(db, req, req)
        .then(data => (!!data ? createSessions(data) : Promise.reject(data)))
        .then(session => {
          console.log("session:", session);
          return res.json(session);
        })
        .catch(err => {
          return res.status(400).json(err);
        });
};

module.exports = {
  handleSignin,
  signinAuth
};
