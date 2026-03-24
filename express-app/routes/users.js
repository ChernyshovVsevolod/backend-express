const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [
    { id: 1, name: 'Telyatnikov Mikhail' },
    { id: 2, name: 'Chernyshov Vsevolod' }
  ];
  res.json({ items: users });
});

module.exports = router;
