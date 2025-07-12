const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // Save contact message from frontend
router.post('/', (req, res) => {
    const { name, email, phone, message } = req.body;

    const sql = `INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)`;

    db.query(sql, [name, email, phone, message], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, message: 'Message received' });
    });
  });

  // Get all contact messages for Admin
  router.get('/all', (req, res) => {
    db.query('SELECT * FROM contact_messages ORDER BY id DESC', (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  });

  return router;
};
