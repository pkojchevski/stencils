const handleSearch = db => (req, res) => {
  const value = req.params.value.toLowerCase();
  db("Szablony")
    .where("Nazwa", "like", `%${value}%`)
    .orWhere("KodSzablonu", "like", `%${value}%`)
    .orWhere("Pozycja", "like", `%${value}%`)
    .orWhere("Uwagi", "like", `%${value}%`)
    .then(szablon => res.json(szablon));
};

const handleDelete = db => (req, res) => {
  const id = req.body.id;
  db.transaction(trx => {
    trx("Szablony")
      .where({ id })
      .then(data => data[0])
      .then(szablon => ({
        ...szablon,
        Data_przyjecia: null,
        IndeksPCB: null,
        KodSzablonu: null,
        Nazwa: null,
        Strona: "",
        Uwagi: null,
        storedPosition: false
      }))
      .then(newSzablon => {
        return trx("Szablony")
          .where({ id: newSzablon.id })
          .update({
            ...newSzablon
          })
          .then(response => res.json(response));
      })
      .then(trx.commit)
      .catch(trx.rolback);
  }).catch(err => res.status(400).json(err));

  // .del()
  // .then(response => res.json(response))
  // .catch(err => res.status(400).json(err));
};

const getSzablony = db => (req, res) => {
  db.select("*")
    .from("Szablony")
    .then(szablony => res.json(szablony));
};

const getSzablonForPcb = db => (req, res) => {
  const pcb = req.params.pcb;
  db("Szablony")
    .where({ IndeksPCB: pcb })
    .then(szablon => res.json(szablon));
};

const getSzablonForId = db => (req, res) => {
  const id = req.params.id;
  db("Szablony")
    .where({ id })
    .then(szablon => res.json(szablon))
    .catch(err => res.status(400).json(err));
};

const updateSzablon = db => (req, res) => {
  const szablon = req.body;
  db("Szablony")
    .where({ id: szablon.id })
    .update({
      ...szablon,
      Data_przyjecia: szablon.Data_przyjecia.substring(0, 10)
    })
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err));
};

const addSzablon = db => async (req, res) => {
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
};

async function getMaxCounter(db) {
  return await db("Szablony")
    .max("KodSzablonu", { as: "maxcounter" })
    .first()
    .then(response => {
      const { maxcounter } = response;
      return maxcounter;
    });
}

const countSzablony = db => (req, res) => {
  db("Szablony")
    .count()
    .then(data => data[0])
    .then(data => res.json(data["count(*)"]));
};

const getSzablonyPages = db => (req, res) => {
  const { page } = req.params;
  db("Szablony")
    .offset(8 * (page - 1))
    .limit(8)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
};

module.exports = {
  handleSearch,
  handleDelete,
  getSzablony,
  getSzablonForPcb,
  getSzablonForId,
  updateSzablon,
  addSzablon,
  getSzablonyPages,
  countSzablony
};
