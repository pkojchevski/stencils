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
  db("Szablony")
    .where({ id })
    .del()
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err));
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
    .then(szablon => res.json(szablon));
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

module.exports = {
  handleSearch,
  handleDelete,
  getSzablony,
  getSzablonForPcb,
  getSzablonForId,
  updateSzablon
};
