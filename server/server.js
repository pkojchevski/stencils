const express = require("express");
const bodyParser = require("body-parser");
const knex = require("knex");
const cors = require("cors");
require("dotenv").config();
const passport = require("passport");

const store = require("./controllers/store");
const auth = require("./controllers/auth");
const szablon = require("./controllers/szablon");
const user = require("./controllers/user");
const mysql = require("./mysql");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(passport.initialize());

require("./controllers/passport")(passport);

//load frontend files
// app.get("*", (req, res) => {
//   res.sendFile(path.join(_dirname, "client/build", "index.html"));
// });

// const db = knex({
//   client: "mysql",
//   connection: {
//     host: `${process.env.MYSQL_HOST}`,
//     user: `${process.env.MYSQL_USER}`,
//     password: `${process.env.MYSQL_PASSWORD}`,
//     database: `${process.env.MYSQL_DATABASE}`,
//     timezone: "utc"
//   }
// });

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("Listening on:", port));

app.get("/szablony", szablon.getSzablony(mysql.db));

app.get("/szablony/count", szablon.countSzablony(mysql.db));

app.get("/szablony/pages/:page", szablon.getSzablonyPages(mysql.db));

app.get("/szablon/pcb/:pcb", szablon.getSzablonForPcb(mysql.db));

app.get("/szablon/:id", szablon.getSzablonForId(mysql.db));

app.put("/szablon/:id", szablon.updateSzablon(mysql.db));

app.post("/szablon", szablon.addSzablon(mysql.db));

app.delete("/szablon", szablon.handleDelete(mysql.db));

app.get("/search/:value", szablon.handleSearch(mysql.db));

app.post("/store", store.handleStore(mysql.db));

app.post("/signin", auth.signinAuth(mysql.db));

app.get("/user/:id", user.getUser(mysql.db));

app.get(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id, username, role } = req.user;
    res.json({ id, username, role });
  }
);
