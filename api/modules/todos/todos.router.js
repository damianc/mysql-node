const express = require('express');
const router = express.Router();

const DB = require('../../db');

router.get('/', (req, res) => {
  DB.query('SELECT * FROM `todos`')
  .then(([rows]) => {
    res.json(rows);
  });
});

module.exports = router;