const handleStore = db => (req, res) => {
  const szablon = req.body;
  let newId;
  db.transaction(trx => {
    trx("Szablony")
      .whereNull("Nazwa")
      .whereNotNull("Pozycja")
      .first()
      .then(emptySzablon => {
        if (!emptySzablon) {
          return res
            .status(400)
            .json({ errors: "There are no free positions" });
        } else {
          return {
            ...szablon,
            Pozycja: emptySzablon.Pozycja,
            id: emptySzablon.id,
            Data_przyjecia: szablon.Data_przyjecia.substring(0, 10)
          };
        }
      })
      .then(newSzablon => {
        newId = newSzablon.id;
        return trx("Szablony")
          .where({ id: newSzablon.id })
          .update({
            ...newSzablon
          })
          .then(() => {
            return trx("Szablony")
              .where({ id: szablon.id })
              .del()
              .then(() => res.json(newId));
          });
      })
      .then(trx.commit)
      .catch(trx.rolback);
  }).catch(err => res.status(400).json(err));

  // const newSzablon = {
  //   ...szablon,
  //   Pozycja: column.Pozycja,
  //   id: column.id
  // };
  // await db("Szablony")
  //   .where({ id: newSzablon.id })
  //   .update({
  //     ...newSzablon
  //   });
  // await deleteSzablon(db, szablon.id)
  //   .then(response => res.json(response))
  //   .catch(err => res.status(400));
};

// async function getEmptyLocationForSzablon(db) {
//   return await db("Szablony")
//     .whereNull("Nazwa")
//     .whereNotNull("Pozycja")
//     .first();
// }

// async function deleteSzablon(db, id) {
//   return await db("Szablony")
//     .where({ id })
//     .del();
// }

module.exports = {
  handleStore: handleStore
};
