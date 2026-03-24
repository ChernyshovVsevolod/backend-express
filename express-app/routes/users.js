const express = require('express');
const router = express.Router();

let users = [];

/* GET users listing. */
router.get('/', function(req, res) {
  const response = {
    items: [
      { id: 1, name: 'Seva' },
      { id: 2, name: 'Mihail' }
    ]
  };

  res.json(response);
});

router.post('/', function(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

router.get('/:id', function(req, res) {
  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

module.exports = router;