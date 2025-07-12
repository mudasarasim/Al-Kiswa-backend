const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // GET all visa applications
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM visa_travelers ORDER BY id DESC`, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  });

  return router;
};
