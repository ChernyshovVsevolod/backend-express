const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('mydb.db');
db.run(`CREATE TABLE IF NOT EXISTS users (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name text)`);

let users = [];

/* GET users listing. */
router.get('/', function(req, res) {
  db.all("SELECT id, name FROM users", [], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });

});

router.post('/', function(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const insert = "INSERT INTO users (name) VALUES (?)";
  db.run(insert, [name]);
  res.status(201).json(name);
});

router.get('/:id', function(req, res) {
  const id = parseInt(req.params.id);

  db.all(`SELECT id, name FROM users WHERE id=${id}`, [], (err, rows) => {
    if (err) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      res.send(rows);
    }
  });
});
module.exports = router;