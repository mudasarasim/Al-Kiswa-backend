// routes/admin/messages.js
const express = require('express');
const router = express.Router();
const adminAuth = require('../../middleware/adminAuth');

module.exports = (db) => {
  router.get('/', adminAuth, (req, res) => {
    db.query('SELECT * FROM contact_messages ORDER BY id DESC', (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  });

  return router;
};
