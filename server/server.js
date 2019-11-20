const express = require("express");
const bodyParser = require("body-parser");
const knex = require("knex");
const cors = require("cors");
require("dotenv").config();

const store = require("./controllers/store");
const auth = require("./controllers/auth");
const szablon = require("./controllers/szablon");
const user = require("./controllers/user");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//load frontend files
// app.get("*", (req, res) => {
//   res.sendFile(path.join(_dirname, "client/build", "index.html"));
// });

console.log(process.env.MYSQL_DATABASE);

const db = knex({
  client: "mysql",
  connection: {
    host: `${process.env.MYSQL_HOST}`,
    user: `${process.env.MYSQL_USER}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: `${process.env.MYSQL_DATABASE}`,
    timezone: "utc"
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("Listening on:", port));

app.get("/szablony", szablon.getSzablony(db));

app.get("/szablon/pcb/:pcb", szablon.getSzablonForPcb(db));

app.get("/szablon/:id", szablon.getSzablonForId(db));

app.put("/szablon/:id", szablon.updateSzablon(db));

// async function updateSzablon(db, szablon) {
//   return await db("Szablony")
//     .where({ id: szablon.id })
//     .update({
//       ...szablon
//     });
// }

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

app.delete("/szablon", szablon.handleDelete(db));

app.get("/search/:value", szablon.handleSearch(db));

app.post("/store", store.handleStore(db));

app.post("/signin", auth.signinAuth(db));

app.get("/user/:id", user.getUser(db));
