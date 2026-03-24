const express = require('express');
const router = express.Router();

const users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ items: users });
});

router.post('/', function(req, res, next) {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
})

module.exports = router;
