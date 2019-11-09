const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const knex = require("knex");
const cors = require("cors");

const store = require("./controllers/store");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//load frontend files
// app.get("*", (req, res) => {
//   res.sendFile(path.join(_dirname, "client/build", "index.html"));
// });

// mysql
// const mySqlConnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "learner",
//   multipleStatements: true
// });

// mySqlConnection.connect(err => {
//   if (!err) console.log("connection established!");
//   elseconsole.log("Connection Failed!", JSONstringify(err));
// });

const db = knex({
  client: "mysql",
  connection: {
    host: "remotemysql.com",
    user: "ivnDgfGC4p",
    password: "GZXkL5VAIQ",
    database: "ivnDgfGC4p"
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("Listening on:", port));

app.get("/szablony", (req, res) => {
  db.select("*")
    .from("Szablony")
    .then(szablony => res.json(szablony));
});

app.get("/szablon/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  db("Szablony")
    .where({ id })
    .then(szablon => res.json(szablon));
});

app.put("/szablon/:id", (req, res) => {
  const szablon = req.body;
  console.log("szablon:", req.body);
  db("Szablony")
    .where({ id: szablon.id })
    .update({
      ...szablon,
      Data_przyjecia: szablon.Data_przyjecia.substring(0, 10)
    })
    .then(response => res.json(response))
    .catch(err => res.status(400));
});

async function updateSzablon(db, szablon) {
  return await db("Szablony")
    .where({ id: szablon.id })
    .update({
      ...szablon
    });
}

app.post("/szablon", async (req, res) => {
  const szablon = req.body;
  const maxCounter = await getMaxCounter(db);
  await db("Szablony")
    .insert({
      ...szablon,
      KodSzablonu: maxCounter + 1,
      Data_przyjecia: szablon.Data_przyjecia.substring(0, 10)
    })
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err));
});

async function getMaxCounter(db) {
  return await db("Szablony")
    .max("KodSzablonu", { as: "maxcounter" })
    .first()
    .then(response => {
      const { maxcounter } = response;
      return maxcounter;
    });
}

app.delete("/szablon", (req, res) => {
  const id = req.body.id;
  db("Szablony")
    .where({ id })
    .del()
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err));
});

app.get("/search/:value", (req, res) => {
  const value = req.params.value.toLowerCase();
  db("Szablony")
    .where("Nazwa", "like", `%${value}%`)
    .orWhere("KodSzablonu", "like", `%${value}%`)
    .orWhere("Pozycja", "like", `%${value}%`)
    .orWhere("Uwagi", "like", `%${value}%`)
    .then(szablon => res.json(szablon));
});

app.post("/store", store.handleStore(db));
