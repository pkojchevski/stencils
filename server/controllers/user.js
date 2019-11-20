const getUser = db => (req, res) => {
  const { id } = req.params;
  db("users")
    .where({ id })
    .then(user => res.json(user[0]))
    .catch(err => res.status(400).json(err));
};

module.exports = {
  getUser
};
